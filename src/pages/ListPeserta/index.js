import React from "react";
import { TextHeader, Orang } from "../../components";

function ListPeserta() {
  return (
    <div>
      <TextHeader title="Teachers" />
      <Orang nama="Fikri Halim Ch" gambar="https://picsum.photos/200/300" />
      <Orang nama="Bukan Fikri" gambar="https://picsum.photos/200/300" />
      <Orang nama="Pura pura fikri" gambar="https://picsum.photos/200/300" />
      <TextHeader title="Asisten" />
      <Orang nama="Fikri Halim Ch" gambar="https://picsum.photos/200/300" />
      <Orang nama="Bukan Fikri" gambar="https://picsum.photos/200/300" />
      <Orang nama="Pura pura fikri" gambar="https://picsum.photos/200/300" />
    </div>
  );
}

export default ListPeserta;
