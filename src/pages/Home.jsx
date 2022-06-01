import React, { useState, useEffect } from "react";
import Note from "../components/Note";
import NotePopup from "../components/NotePopup";
import Fab from "../components/Fab";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ axiosInstance }) => {
  useEffect(() => {
    getNotes();
  }, []);
  const navigate = useNavigate();
  const [allNotes, setAllNotes] = useState([]);
  const [popupNoteBox, setPopupNoteBox] = useState(-1);
  const [isLoading, setisLoading] = useState(false);
  async function getNotes() {
    setAllNotes([]);
    setisLoading(true);
    try {
      const resp = await axiosInstance.get("/notes");
      const newNotes = resp.data;
      console.log(newNotes);
      setAllNotes(newNotes);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  const popupNote = (a) => {
    setPopupNoteBox(a);
  };
  const deleteNote = (id) => {
    axiosInstance
      .delete(`/delete/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    getNotes();
    setPopupNoteBox(-1);
  };
  const editNote = (id) => {
    navigate(`/edit/${id}`);
  };
  const copyNote = (e) => {
    navigator.clipboard.writeText(
      allNotes[e].title + "\n\n" + allNotes[e].content
    );
  };
  return (
    <section className="home">
      <div className="home-container">
        <div className="notes">
          <ResponsiveMasonry columnsCount={4}>
            <Masonry>
              {!isLoading &&
                allNotes.map((note, index) => (
                  <Note
                    note={note}
                    key={index}
                    onCopy={() => {
                      copyNote(index);
                    }}
                    onEdit={() => {
                      editNote(index);
                    }}
                    onDelete={() => {
                      deleteNote(index);
                    }}
                    pop={() => {
                      popupNote(index);
                    }}
                  />
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        {allNotes.length === 0 && (
          <div className="notes-null">
            No notes yet...
            <br />
            Click on Add button to add a new note
          </div>
        )}
        {popupNoteBox >= 0 && (
          <NotePopup
            note={allNotes[popupNoteBox]}
            close={() => {
              setPopupNoteBox(-1);
            }}
            onCopy={() => {
              copyNote(popupNoteBox);
            }}
            onEdit={() => {
              editNote(popupNoteBox);
            }}
            onDelete={() => {
              deleteNote(popupNoteBox);
            }}
          />
        )}
        <Link to="/add">
          <Fab icon="add" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
