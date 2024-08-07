import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { http } from "../utils/http";

const Add = () => {
  useEffect(() => {
    getNotes();
  }, []);
  const navigate = useNavigate();
  const [allNotes, setAllNotes] = useState([]);
  async function getNotes() {
    await http
      .get("/notes")
      .then((res) => {
        setAllNotes([...res.data]);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    let newNote = {
      id: allNotes.length,
      ...note,
    };
    e.preventDefault();
    const condition = newNote.title === "" && newNote.content === "";
    if (!condition) {
      await http
        .post("/add", newNote)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      navigate("/");
    }
  };
  return (
    <section className="add">
      <div className="add-container">
        <form className="add-form" onSubmit={handleSubmit}>
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            className="add-form__input"
            type="text"
            placeholder="Title"
          />
          <textarea
            value={note.content}
            onChange={handleChange}
            name="content"
            className="add-form__input"
            type="text"
            placeholder="Content"
            rows="10"
          ></textarea>
          <input
            value={note.color}
            onChange={handleChange}
            name="color"
            className="add-form__input"
            type="color"
            placeholder="Color"
          />
          <Button text="Add Note" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Add;
