function StudentForm({ nouvelEtudiant, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="ajout-form">
      <input
        type="text"
        name="nompr"
        placeholder="Nom et prénom"
        value={nouvelEtudiant.nompr}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={nouvelEtudiant.email}
        onChange={onChange}
      />
      <input
        type="text"
        name="tel"
        placeholder="Téléphone"
        value={nouvelEtudiant.tel}
        onChange={onChange}
      />
      <input
        type="text"
        name="filiere"
        placeholder="Filière"
        value={nouvelEtudiant.filiere}
        onChange={onChange}
      />
      <input
        type="text"
        name="groupe"
        placeholder="Groupe"
        value={nouvelEtudiant.groupe}
        onChange={onChange}
      />
      <input
        type="text"
        name="ville"
        placeholder="Ville"
        value={nouvelEtudiant.ville}
        onChange={onChange}
      />
      <label>
        Image
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={onChange}
        />
      </label>
      <button type="submit">Ajouter Etudiant</button>
    </form>
  );
}

export default StudentForm;
