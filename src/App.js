import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import Names from "./components/Names.jsx";
import Results from "./components/Results.jsx";
AOS.init();

function App() {
  const [x1, vrated] = useState("Vrated");
  var answer = 0;
  const [fvalue, fans] = useState(0);
  var [fanswer, ans] = useState(true);
  const [x2, Tr] = useState("Transformation ratio (a)");
  const [x3, Wr] = useState("wattmeter reading");
  const [x4, fr] = useState("Frequency");
  const [x5, poles] = useState("Poles");
  const [x6, vdc] = useState("Vdc");
  const [x7, idc] = useState("Idc");
  const [x8, vbr] = useState("Voltage VBR(phase)");
  const [x9, ibr] = useState("Current IBR(line)");
  const [x1v, vratedv] = useState(0);
  const [x2v, Trv] = useState(0);
  const [x3v, Wrv] = useState(0);
  const [x4v, frv] = useState(0);
  const [x5v, polesv] = useState(0);
  const [x6v, vdcv] = useState(0);
  const [x7v, idcv] = useState(0);
  const [x8v, vbrv] = useState(0);
  const [x9v, ibrv] = useState(0);
  function check(e) {
    if (
      x1v <= 0 ||
      x2v <= 0 ||
      x3v <= 0 ||
      x4v <= 0 ||
      x5v <= 0 ||
      x6v <= 0 ||
      x7v <= 0 ||
      x8v <= 0 ||
      x9v <= 0
    ) {
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Error Detected",
        text: "Enter all the values ",
      }).then((result) => {
        console.log(result.isConfirmed);
        if (result.isConfirmed) window.location.reload();
      });
    } else if (x5v % 2 === 1) {
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Error Detected",
        text: "Please enter even number of poles",
      }).then((result) => {
        console.log(result.isConfirmed);
        if (result.isConfirmed) window.location.reload();
      });
    } else {
      e.preventDefault();
      let wsc = 4 * Math.PI * x4v;
      wsc = wsc / x5v;
      let r1 = x6v / x7v;
      let r01 = x3v / (x9v * x9v);
      let r2 = r01 - r1;
      let isc = (x2v * x9v * x1v) / (1.732 * x8v);
      answer = (3 * isc * isc * r2) / wsc;
      answer = answer.toFixed(2);;
      fans(answer);
      ans(false);
    }
  }
  function hel() {
    Swal.fire({
      icon: "success",
      title: "More Information",
      imageUrl: 'https://lh3.googleusercontent.com/HzJP1Gqx47ZyJpJt20b4w94GO8vASfXYiSmNMgNPMc8bpUUKqwyp-MqwKzQ-gwQPmbDpo2CxMKLYjaP-Ar97vUnyYHslkZty7Gv2VCnluMcLLbTQPOiTdBsJ1QlUOJ5JqWyNkcVYg9T6mwprxLg75tzfsvCDAMG0ZWA3OObvKYY_CDoRXMsRX6z3s9FMifXVlsckBAs1bos-PFCKgoKJSsGLX5EF59SoXR03UKMNgRM8tHBdbW3KBB-T_YzRS4LpqnCEJDS_wQOariD3fEiKrrpC9M9F_lc29ZRj6IkmeLMaelZQrpPuDtfJEyrnNs-HjG8bq9KCDtGz_ERXE1nCnmYQjH_7QTiM6MTQts8Z9_aVCCpN06w441IJiWY-s8Gkhe7omJFmB6TKEDhXPJbkH9pifdXF4tCDTRk0DVJwJHXw8Cv_Wxm5SlwmJpNuhOMARTQsTjIV0mV4o3GFmeMD9auXzdIlbGLIwpmA5dUF61z2PdP2fgoFfy5G7HAv1JsoPyExrN2_K7JVatEFlNa5LpBflb8H6FxlDuyHq7nTN0yKTAir6YnjgzEHw2vKv9xKwK0nZ8pj74d74cdmGq-yCj466UUUsM_nBkM3fkPr_FK_JmVYCR0afDDwJvzB9nYD6pxGOMDUDccwWLFRFMBL14S5YKKXLgI3J54xTDQm-IvdtFB1PLRGmYFu45p4Zf5IabnT8RnSQ3JH8ntp-EZUkw1S=w531-h300-no?authuser=0',
      imageHeight: 200,
      text: "Click on OK to access the slide",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed)
      window.open('https://www.canva.com/design/DAEauw-BMAo/PR5uAFZJ2gXvPpgd9oSqGg/view', '_blank');
        
    });
  }
  function Vrated(event) {
    vrated("");

    vratedv(event.target.value);
  }
  function Tfr(event) {
    Tr("");
    Trv(event.target.value);
  }
  function Wrated(event) {
    Wr("");
    Wrv(event.target.value);
  }
  function frequency(event) {
    fr("");
    frv(event.target.value);
  }
  function Poles(event) {
    poles("");
    polesv(event.target.value);
  }
  function Vdc(event) {
    vdc("");
    vdcv(event.target.value);
  }
  function Idc(event) {
    idc("");
    idcv(event.target.value);
  }
  function Vbr(event) {
    vbr("");
    vbrv(event.target.value);
  }
  function Ibr(event) {
    ibr("");
    ibrv(event.target.value);
  }

  return (
    <>
      <div className="container">
        <span className="big-circle"></span>
        <img src="./img/shape.png" className="square" alt="" />
        <div className="form">
          <div
            className="contact-info"
            style={fanswer ? { marginTop: "35%" } : { Top: "2%" }}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h3 className="title" style={{ textAlign: "center" }}>
              Machines Project-8
            </h3>
            <p className="text" style={{ textAlign: "center" }}>
              {fanswer
                ? "Enter the Datas in SI units in the following fields to get the answer"
                : "The value calculated is at right"}
            </p>

            <div className="info">
              <h3
                className="title"
                style={{ textAlign: "center", marginBottom: "5%" }}
              >
                Students Name
              </h3>
              <Names />
            </div>
            <div className="social-media">
              <div className="center">
                <button onClick={hel} className="button">
                  Know More
                </button>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>
            {fanswer ? (
              <>
                {" "}
                <form data-aos="fade-left" data-aos-duration="3000">
                  <h3 className="title">Input Fields</h3>
                  <div className="input-container">
                    <input type="number" className="input" onChange={Vrated} />
                    <label htmlFor="">{x1}</label>
                    <span>Vrated</span>
                  </div>
                  <div className="input-container">
                    <input type="number" className="input" onChange={Tfr} />
                    <label htmlFor="">{x2}</label>
                    <span>transformation ratio (a)</span>
                  </div>
                  <div className="input-container">
                    <input type="number" className="input" onChange={Wrated} />
                    <label htmlFor="">{x3}</label>
                    <span>wattmeter reading</span>
                  </div>
                  <div className="input-container">
                    <input
                      type="number"
                      className="input"
                      onChange={frequency}
                    />
                    <label htmlFor="">{x4}</label>
                    <span>Frequency</span>
                  </div>
                  <div className="input-container">
                    <input type="number" className="input" onChange={Poles} />
                    <label htmlFor="">{x5}</label>
                    <span>Poles</span>
                  </div>
                  <div className="input-container">
                    <input type="number" className="input" onChange={Vdc} />
                    <label htmlFor="">{x6}</label>
                    <span>Vdc</span>
                  </div>
                  <div className="input-container">
                    <input type="number" className="input" onChange={Idc} />
                    <label htmlFor="">{x7}</label>
                    <span>Idc</span>
                  </div>
                  <div className="input-container">
                    <input type="number" className="input" onChange={Vbr} />
                    <label htmlFor="">{x8}</label>
                    <span>Voltage VBR(phase)</span>
                  </div>
                  <div className="input-container">
                    <input type="number" className="input" onChange={Ibr} />
                    <label htmlFor="">{x9}</label>
                    <span>Current IBR(line)</span>
                  </div>

                  <input type="submit" className="btn" onClick={check} />
                </form>
              </>
            ) : (
              <Results value={fvalue} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
