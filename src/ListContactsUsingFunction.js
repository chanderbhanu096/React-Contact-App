import React from "react";

function ListContactsUsingFunction(props) {
  return (
    <ol className="contact-list">
      {props.contacts.map((contact) => (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{ backgroundImage: `url(${contact.avatar_url})` }}
          />
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <button className="contact-remove">Remove</button>
        </li>
      ))}
    </ol>
  );
}

export default ListContactsUsingFunction;
