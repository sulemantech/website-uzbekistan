import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";

const Impressum = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
    <div className="w-full relative  overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[2.187rem] pb-[2.5rem] box-border text-left text-[3.75rem] text-giga-fiber-lila font-saira-condensed">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="headerbgvideo.mov"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="w-[90rem] z-50 [background:linear-gradient(180deg,_#281d57,_#1e1a2e)] h-[4.375rem] flex flex-col items-start justify-start py-[1.312rem] px-[3.062rem] box-border">
        <div className="w-[77.5rem] flex flex-col items-start justify-start">
          <img
            className="w-[13.438rem] relative h-[1.688rem] overflow-hidden shrink-0"
            alt=""
            src="/ebene-1.svg"
          />
        </div>
      </div>

      <div className="w-[85.625rem] flex flex-col items-center justify-center py-[2.5rem] px-[2.562rem] box-border">
        <div className="rounded-22xl bg-white z-50 flex flex-col items-start justify-start py-[6.25rem] px-[13.437rem]">
          <div className="w-[39.25rem] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem]">
              <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[5.75rem]">
                <img
                  className="w-[2.688rem] h-[4.625rem] overflow-hidden -rotate-180 shrink-0 object-contain cursor-pointer"
                  alt=""
                  src="/objects1.svg"
                  onClick={handleClick}
                />
                <div className="w-[33.313rem] flex flex-col items-start justify-start gap-[1.187rem]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="w-[33.313rem] flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-center">
                          <b className="w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                            Impressum
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[24.5rem] relative border-giga-fiber-lila border-t-[4px] border-solid box-border h-[0.25rem]" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[5.687rem] gap-[2.5rem] text-[1.875rem]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="w-[33.313rem] flex flex-col items-start justify-start gap-[1.25rem]">
                      <div className="flex flex-row items-center justify-center">
                        <b className="w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                          Registergericht
                        </b>
                      </div>
                      <div className="w-[32.375rem] flex flex-col items-start justify-start text-[1rem] text-black">
                        <div className="self-stretch relative leading-[125%]">
                          <p className="m-0">
                            GIGA FIBER Netz GmbHUntermainkai 27-28D-60329
                            Frankfurt am Main{" "}
                            <a
                              className="text-[inherit]"
                              href="mailto:info@gigafiber.group"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="[text-decoration:underline]">
                                info@gigafiber.group
                              </span>
                            </a>
                            Vertreten durch: Jörg Müller
                          </p>
                          <p className="m-0">Handelsregister: HRB 132612</p>
                          <p className="m-0">
                            Registergericht: Amtsgericht Frankfurt am Main
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2.5rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="w-[33.313rem] flex flex-col items-start justify-start gap-[1.25rem]">
                        <div className="flex flex-row items-center justify-center">
                          <b className="w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                            Copyright
                          </b>
                        </div>
                        <div className="w-[32.375rem] flex flex-col items-start justify-start text-[1rem] text-black">
                          <div className="self-stretch relative leading-[125%]">
                            <p className="m-0">
                              Die in der Website enthaltenen Textbeiträge und
                              Abbildungen sind urheberrechtlich geschützt. Das
                              Copyright liegt bei GIGA FIBER Netz GmbH.
                            </p>
                            <p className="m-0">
                              Jede auszugsweise Verwertung bedarf der vorherigen
                              schriftlichen Zustimmung von GIGA FIBER Netz GmbH.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <div className="w-[33.313rem] flex flex-col items-start justify-start gap-[1.25rem]">
                        <div className="flex flex-row items-center justify-center">
                          <b className="w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                            Haftungsausschluss
                          </b>
                        </div>
                        <div className="w-[32.375rem] flex flex-col items-start justify-start text-[1rem] text-black">
                          <div className="self-stretch relative leading-[125%]">
                            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen
                            wir keine Haftung für die Inhalte externer Links.
                            Für den Inhalt der verlinkten Seiten sind
                            ausschließlich deren Betreiber selbst
                            verantwortlich.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GroupComponent />
    </div>
    </>
  );
};
export default Impressum