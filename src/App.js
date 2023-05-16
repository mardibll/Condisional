import logo from "./logo.svg";
import "./App.css";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const nilai = 50;

  const condisional = nilai > 60 ? "Jawabn Benar" : "Jawaban Salah";
  console.log(condisional);

  const condisionalDan = nilai > 60 && "hallo";
  console.log(condisionalDan);

  const condisionalOr = nilai > 60 || "condisionalor";
  console.log(condisionalOr);

  const datasiswa = [
    {
      namaWali: "Sri Mulyani Hartini",
      kelas: "x",
      jumlahSiswa: 50,
    },
    {
      namaWali: "Yohanes Ferdi Oloan",
      kelas: "xl",
      jumlahSiswa: 55,
    },
    {
      namaWali: "Sulaiman",
      kelas: "xll",
      jumlahSiswa: 42,
    },
  ];
  const listSiswa = datasiswa.map((item, index) => item);
  console.log(listSiswa);

  return (
    <div className="App" style={{}}>
      <table className="table" style={{}}>
        <thead>
          <tr>
            <th scope="col">Wali kelas</th>
            <th scope="col">Kelas</th>
            <th scope="col">jumlah Siswa</th>
          </tr>
        </thead>
        {datasiswa.map((item, index) => {
          return (
            <tbody key={index}>
              <tr style={{ borderWidth: 3 }}>
                <td>{item.namaWali}</td>
                <td>{item.kelas}</td>
                <td>{item.jumlahSiswa + 10}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
