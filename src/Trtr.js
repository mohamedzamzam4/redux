import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { edite, isdone, supprimer } from "./redux/actions/taskAction";

const Trtr = ({ index, el }) => {
  const [edit, setEdit] = useState(false); // Toggle edit mode
  const [name, setName] = useState(el.name); // Track name value
  const [desc, setDesc] = useState(el.desc); // Track description value

  const nameInputRef = useRef(); // Ref for the name input
  const descInputRef = useRef(); // Ref for the description input

  const dispatch = useDispatch(); // Redux dispatcher

  const handleEditToggle = () => {
    setEdit((prev) => !prev);
    if (!edit) {
      // When entering edit mode, set the input values
      setName(el.name);
      setDesc(el.desc);
    }
  };

  const handleValidation = () => {
    dispatch(edite({ nameref: el.name, name, desc }));
    setEdit(false); // Exit edit mode
  };

  const handleDelete = () => dispatch(supprimer(el.name));

  const handleDone = () => dispatch(isdone({ nameref: el.name }));

  return (
    <tr key={index}>
      <td style={{ width: "5vw" }}>{index + 1}</td>

      {edit ? (
        // Editable mode
        <>
          <td>
            <input
              type="text"
              style={{ width: "24vw" }}
              ref={nameInputRef}
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name on change
            />
          </td>
          <td>
            <input
              type="text"
              style={{ width: "49vw" }}
              ref={descInputRef}
              value={desc}
              onChange={(e) => setDesc(e.target.value)} // Update description on change
            />
          </td>
        </>
      ) : (
        // View mode
        <>
          <td style={{ width: "25vw" }}>{el.name}</td>
          <td style={{ width: "50vw" }}>{el.desc}</td>
        </>
      )}

      <td style={{ width: "23vw" }}>
        {/* Edit Button */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/10573/10573603.png"
          style={{ width: "30px", cursor: "pointer" }}
          alt="edit"
          onClick={handleEditToggle}
        />
        {/* Delete Button */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
          style={{ width: "30px", cursor: "pointer" }}
          alt="delete"
          onClick={handleDelete}
        />
        {/* Validate Button */}
        {edit && (
          <img
            src="https://cdn-icons-png.flaticon.com/128/2198/2198355.png"
            style={{ width: "30px", cursor: "pointer" }}
            alt="validate"
            onClick={handleValidation}
          />
        )}
      </td>

      {/* Done Button */}
      <td>
        <button onClick={handleDone} style={{ cursor: "pointer" }}>
          Done
        </button>
      </td>
    </tr>
  );
};

export default Trtr;