import React, { useState } from "react";
import "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Fale comigo</h2>

      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
