import React from "react";
import { BodyContainer, CustomButton } from "../../styles/global";
import { TitleBar, EntryList, ContentContainer } from "./styles";
import Status from "../../components/Status";
import UserBar from "../../components/UserBar";
import Card from "../../components/Card";
import { useStatus } from "../../hooks/useStatus";
import uuid from "react-uuid";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { database} from "../../services/firebase";
import {collection, query, where, getDocs, doc, addDoc, setDoc, deleteDoc} from 'firebase/firestore';
import { UserAuth } from '../../contexts/AuthContext';
import { isJsonString } from '../../utils';

interface IEntry {
  uid: string;
  id: string;
  title: string;
  content: string;
  date: string;
}

const testEntries = [
  {
    uid: "0",
    id: "0",
    title: "Initial Self Care",
    content: "Run at least 3km",
    date: ""
  },{
    uid: "0",
    id: "0",
    title: "Go to the Gym",
    content: "Run at least 3km",
    date: ""
  },{
    uid: "0",
    id: "0",
    title: "DO NOT DRINK ALCOHOOL",
    content: "Run at least 3km",
    date: ""
  },{
    uid: "0",
    id: "0",
    title: "Post at least one video in trendalertbr channel",
    content: "Run at least 3km",
    date: ""
  },{
    uid: "0",
    id: "0",
    title: "Run at least 3km",
    content: "Run at least 3km",
    date: ""
  },{
    uid: "0",
    id: "0",
    title: "Read 8.4%+ of a storytelling book",
    content: "Run at least 3km",
    date: ""
  },{
    uid: "0",
    id: "0",
    title: "Invest at least 10% - Desired 30%",
    content: "Run at least 3km",
    date: ""
  },{
    uid: "0",
    id: "0",
    title: "Define and do one whole weekend outdoor activity a quarter",
    content: "Run at least 3km",
    date: ""
  }
]

const Dashboard: React.FC = () => {
  const startDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = React.useState<string>(startDate);
  const [entries, setEntries] = React.useState<IEntry[]>([]);
  const [inputStatus, setInputStatus] = useStatus(null);
  const dateRef = React.useRef<HTMLInputElement>(null);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const {user} = UserAuth();

  const handleDateIncDec = (days: number) => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + days);
    const dateStr = date.toISOString().split("T")[0];
    setSelectedDate(dateStr);
    if (dateRef !== null && dateRef.current !== null) {
      dateRef.current.value = dateStr;
    }
  };

  const handleDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  async function handleAddNewEntry(event: React.FormEvent<HTMLButtonElement>) {
    const newEntry: IEntry = {
      uid: user.uid,
      id: uuid(),
      title: "",
      content: "",
      date: selectedDate,
    };
    const newEntries = [...entries, newEntry];
    setEntries(newEntries);
    const userDocRef = doc(database, "users", user.uid);
    const entriesRef = collection(userDocRef, "entries");
    await addDoc(entriesRef, newEntry);
  }

  async function fetchEntries() {
    const userDocRef = doc(database, "users", user.uid);
    const entriesRef = collection(userDocRef, "entries");
    const querySnapshot = await getDocs(entriesRef);
    const entries: IEntry[] = [];
    querySnapshot.forEach((doc) => {
      entries.push(doc.data() as IEntry);
    });
    setEntries(entries);
  }

  React.useEffect(() => {
    // fetchEntries();
    setEntries(testEntries);
  }, []);

  const handleDeleteEntry = async (id: string) => {
    const newEntries = entries.filter(entry => entry.id !== id);
    setEntries(newEntries);

    const userDocRef = doc(database, "users", user.uid);
    const entriesRef = collection(userDocRef, "entries");
    const userQuery = query(entriesRef, where("id", "==", id));
    const querySnapshot = await getDocs(userQuery);
    querySnapshot.forEach((document) => {
      deleteDoc(doc(database, `users/${user.uid}/entries`, document.id));
    });
  }

  const handleChangeEntry = async (id: string, content: string) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        entry.content = content;
      }
      return entry;
    });
    setEntries(newEntries);

    const changedEntry = entries.find(entry => entry.id === id);
    if (changedEntry) {
      changedEntry.content = content;
      const userDocRef = doc(database, "users", user.uid);
      const entriesRef = collection(userDocRef, "entries");
      const userQuery = query(entriesRef, where("id", "==", id));
      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach((document) => {
        setDoc(doc(database, `users/${user.uid}/entries`, document.id), changedEntry);
      });
    }
  }

  let count = 0;
  return (
      <BodyContainer>
      <UserBar/>
      <TitleBar>Quest Board</TitleBar>
      {/* <Status status={inputStatus} /> */}
      <ContentContainer>
        <EntryList>
          {entries.map((entry, index) => {
            return (
              <Card
                key={entry.id}
                id={entry.id}
                number={count=count+1}
                title={entry.title}
                content={entry.content}
                onDeleteCard={handleDeleteEntry}
                onChangeContent={handleChangeEntry}
              />
            )})}
        </EntryList>
        <CustomButton color="#04d361" onClick={handleAddNewEntry}>Add New</CustomButton>
      </ContentContainer>
      </BodyContainer>
  );
};

export default Dashboard;
