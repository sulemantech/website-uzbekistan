import React from 'react'
import { useNavigate } from "react-router-dom";
import Footer from './Footer'

function Datenschutz() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
    };
  return (
    <div className=" relative overflow-hidden flex flex-col items-center justify-start pt-[0rem] pb-[2.5rem] box-border text-left text-[3.75rem] text-giga-fiber-lila font-saira-condensed">
    {/* <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="headerbgvideo.mov"
      autoPlay
      loop
      muted
      playsInline
    ></video> */}
    <div className="w-full [background:linear-gradient(180deg,_#281d57,_#1e1a2e)] h-[4.375rem] flex flex-col items-start justify-start py-[1.312rem] px-[3.062rem] box-border">
  <div className="w-full max-w-[77.5rem] flex flex-col items-start justify-start mx-auto">
    <img
      className="w-[13.438rem] relative h-[1.688rem] overflow-hidden shrink-0"
      alt=""
      src="/ebene-1.svg"
    />
  </div>
</div>
<div className="w-full max-w-[85.625rem] flex flex-col items-center justify-center py-[2.5rem] px-[1.50rem] md:px-[2.562rem] box-border mx-auto">
  <div className="w-full max-w-[78.125rem] rounded-2xl bg-white flex flex-col items-start justify-start py-[6.25rem] pl-[0.25rem] pr-[0.25] md:pr-[2.5rem] box-border">
    <div className="self-stretch flex flex-col items-start justify-start">
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem]">
        <div className="flex flex-col items-start justify-start py-[0rem] px-[0.25rem] md:px-[5.687rem] gap-[0.875rem]">
          <img
            className="w-[2.688rem] h-[4.625rem] overflow-hidden rotate-180 shrink-0 object-contain cursor-pointer"
            alt=""
            src="/objects1.svg"
            onClick={handleClick}
          />
          <div className="w-full max-w-[33.313rem] flex flex-col items-start justify-start gap-[1.187rem]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="w-full max-w-[33.313rem] flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <b className="w-full max-w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                      Datenschutz
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[24.5rem] relative border-giga-fiber-lila border-t-[4px] border-solid box-border h-[0.25rem]" />
          </div>
        </div>
        <div className="w-full max-w-[77.875rem] flex flex-col items-start justify-start py-[0rem] px-[0.25rem] md:px-[5.687rem] box-border gap-[2.5rem] text-[1.875rem]">
          <div className="w-full max-w-[66rem] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-full max-w-[68.375rem] flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-center justify-center">
                  <b className="w-full max-w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                    Inhaltsverzeichnis
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-black">
                  <div className="w-full max-w-[66.25rem] relative leading-[125%] inline-block">
                    <p className="m-0">
                      Die Nutzung dieser Webseite
                      <a
                        className="text-[inherit]"
                        href="https://gf-netz.de/datenschutz/www.gf-netz.de"
                        target="_blank"
                      >
                        <span className="[text-decoration:underline]">
                          www.gf-netz.de
                        </span>
                      </a>
                      kann mit der Verarbeitung von personenbezogenen Daten
                      verbunden sein. Damit diese Verarbeitungen für Sie
                      nachvollziehbar sind, möchten wir Ihnen mit den
                      folgenden Informationen einen Überblick zu diesen
                      Verarbeitungen verschaffen. Um eine faire Verarbeitung
                      zu gewährleisten, möchten wir Sie außerdem über Ihre
                      Rechte nach der Europäischen Datenschutz-Grundverordnung
                      (DSGVO) und dem Bundesdatenschutzgesetz (BDSG)
                      informieren. Verantwortlich für die Datenverarbeitung ist
                      die GIGA FIBER Netz GmbH, 27-28, 60329 Frankfurt am Main,
                      Deutschland (nachfolgend auch als „wir“ oder „uns“
                      bezeichnet).
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Wenn Sie Fragen oder Anregungen zu diesen Informationen
                      haben oder sich wegen der Geltendmachung Ihrer Rechte an
                      uns wenden möchten, richten Sie Ihre Anfrage bitte an:
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      GIGA FIBER Netz GmbHUntermainkai 27-2860329 Frankfurt am
                      Main
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      E-Mail:
                      <a
                        className="text-[inherit]"
                        href="mailto:info@gigafiber.group"
                        target="_blank"
                      >
                        <span className="[text-decoration:underline]">
                          info@gigafiber.group
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] text-[1rem] text-black">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="w-[66.375rem] flex flex-col items-start justify-start gap-[1.25rem]">
                      <div className="flex flex-row items-center justify-center text-[1.875rem] text-giga-fiber-lila">
                        <b className="relative leading-[125%] uppercase">
                          1. Allgemeine Angaben zur Datenverarbeitung
                        </b>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[125%]">
                          <p className="m-0">
                            Bei der Nutzung dieser Webseite werden
                            personenbezogene Daten von der GIGA FIBER Netz
                            GmbH verarbeitet. „Personenbezogene Daten“ im
                            Sinne der DSGVO umfassen alle Informationen, die
                            sich auf eine bestimmte oder bestimmbare Person
                            beziehen. Auch die IP-Adresse kann so ein
                            personenbezogenes Datum sein. Eine IP-Adresse wird
                            jedem mit dem Internet verbundenen Gerät durch den
                            Internetprovider zugewiesen, damit es Daten senden
                            und empfangen kann.
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            Wir verarbeiten personenbezogene Daten unter
                            Beachtung der einschlägigen
                            Datenschutzvorschriften, insbesondere der DSGVO
                            und des BDSG. Eine Datenverarbeitung durch uns
                            findet nur auf der Grundlage einer gesetzlichen
                            Erlaubnis statt. Wir verarbeiten personenbezogene
                            Daten nur mit Ihrer Einwilligung (Art.6 Abs.1
                            lit.a DSGVO), zur Erfüllung eines Vertrags, dessen
                            Vertragspartei Sie sind, oder auf Ihre Anfrage zur
                            Durchführung vorvertraglicher Maßnahmen (Art.6
                            Abs.1 lit.b DSGVO), zur Erfüllung einer
                            rechtlichen Verpflichtung (Art.6 Abs.1 lit.c
                            DSGVO) oder wenn die Verarbeitung zur Wahrung
                            unserer berechtigten Interessen oder den
                            berechtigten Interessen eines Dritten erforderlich
                            ist, sofern nicht Ihre Interessen oder Grundrechte
                            und Grundfreiheiten, die den Schutz
                            personenbezogener Daten erfordern, überwiegen
                            (Art.6 Abs.1 lit.f DSGVO).
                          </p>
                        </div>
                      </div>
                      <div className="w-full max:w-[66.375rem] flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[125%]">
                          <p className="m-0 text-giga-fiber-lila">
                            <b>1.1 EXTERNES HOSTING</b>
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            Diese Website wird bei einem externen
                            Dienstleister gehostet (Hoster). Die
                            personenbezogenen Daten, die auf dieser Website
                            erfasst werden, werden auf den Servern des Hosters
                            gespeichert. Hierbei kann es sich v. a. um
                            IP-Adressen, Kontaktanfragen, Meta- und
                            Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                            Namen, Websitezugriffe und sonstige Daten, die
                            über eine Website generiert werden, handeln.
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            Der Einsatz des Hosters erfolgt zum Zwecke der
                            Vertragserfüllung gegenüber unseren potenziellen
                            und bestehenden Kunden (Art. 6 Abs. 1 lit. b
                            DSGVO) und im Interesse einer sicheren, schnellen
                            und effizienten Bereitstellung unseres
                            Online-Angebots durch einen professionellen
                            Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            Unser Hoster wird Ihre Daten nur insoweit
                            verarbeiten, wie dies zur Erfüllung seiner
                            Leistungspflichten erforderlich ist und unsere
                            Weisungen in Bezug auf diese Daten befolgen.
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            Wir setzen folgenden Hoster ein:
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            STRATO AGPascalstraße 1010587 Berlin
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0 text-giga-fiber-lila">
                            <b>1.2 DAUER DER SPEICHERUNG</b>
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            Sofern sich aus den folgenden Hinweisen nichts
                            anderes ergibt, speichern wir die Daten nur
                            solange, wie es zur Erreichung des
                            Verarbeitungszwecks oder für die Erfüllung unserer
                            vertraglichen oder gesetzlichen Pflichten
                            erforderlich ist. Solche gesetzlichen
                            Aufbewahrungspflichten können sich insbesondere
                            aus handels- oder steuerrechtlichen Vorschriften
                            ergeben. In diesem Fall werden wir Ihre Daten
                            ausschließlich für die gesetzlich vorgesehene Zeit
                            und die damit verfolgten Zwecke bearbeiten.
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0 text-giga-fiber-lila">
                            <b>1.3 TECHNISCHE DIENSTLEISTER</b>
                          </p>
                          <p className="m-0">
                            <b>&nbsp;</b>
                          </p>
                          <p className="m-0">
                            Sofern sich aus den folgenden Hinweisen nichts
                            anderes ergibt, erfolgt die Verarbeitung der Daten
                            auf eigenen Servern und ggf. Servern technischer
                            Dienstleister in der Europäischen Union, die
                            hierzu durch uns beauftragt wurden. Zurzeit
                            erfolgt das Hosting auf Servern der Strato AG. In
                            Bezug auf unsere Webseite werden die Daten nur
                            nach ausdrücklicher Weisung und unter
                            vertraglicher Verpflichtung zur Gewährleistung von
                            hinreichenden technischen und organisatorischen
                            Maßnahmen zum Datenschutz verarbeitet
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0 text-giga-fiber-lila">
                            <b>1.4 VERARBEITUNG VON SERVER-LOG-FILES</b>
                          </p>
                          <p className="m-0">
                            <b>&nbsp;</b>
                          </p>
                          <p className="m-0">
                            Der Provider der Seiten erhebt und speichert
                            automatisch Informationen in so genannten
                            Server-Log-Dateien, die Ihr Browser automatisch an
                            uns übermittelt. Dies sind:
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <ul className="m-0 text-inherit pl-[1.312rem]">
                            <li className="my-[undefined] mx-[undefined]">
                              <span>Browsertyp und Browserversion</span>
                            </li>
                            <li className="my-[undefined] mx-[undefined]">
                              <span>verwendetes Betriebssystem</span>
                            </li>
                            <li className="my-[undefined] mx-[undefined]">
                              <span>Referrer URL</span>
                            </li>
                            <li className="my-[undefined] mx-[undefined]">
                              <span>Hostname des zugreifenden Rechners</span>
                            </li>
                            <li className="my-[undefined] mx-[undefined]">
                              <span>Uhrzeit der Serveranfrage</span>
                            </li>
                            <li className="my-[undefined] mx-[undefined]">
                              <span>IP-Adresse</span>
                            </li>
                          </ul>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            Eine Zusammenführung dieser Daten mit anderen
                            Datenquellen wird nicht vorgenommen.
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            Die Erfassung dieser Daten erfolgt auf Grundlage
                            von Art. 6 Abs. 1 lit. f DSGVO. Der
                            Websitebetreiber hat ein berechtigtes Interesse an
                            der technisch fehlerfreien Darstellung und der
                            Optimierung seiner Website – hierzu müssen die
                            Server-Log-Files erfasst werden.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max:w-[66.375rem] flex flex-col items-start justify-start text-[1.875rem] text-giga-fiber-lila">
                  <div className="flex flex-row items-start justify-start">
                    <div className="w-full max:w-[69.5rem] flex flex-col items-start justify-start gap-[1.25rem]">
                      <div className="flex flex-row items-center justify-center">
                        <b className="w-full max:w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                          Haftungsausschluss
                        </b>
                      </div>
                      <div className="w-full max:w-[68.625rem] flex flex-col items-start justify-start text-[1rem] text-black">
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-center justify-center">
                  <b className="w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                    2. Kontaktformular
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-black">
                  <div className="self-stretch relative leading-[125%]">
                    Unsere Webseite enthält ein Kontaktformular, über das Sie
                    uns Nachrichten, Anfragen oder Fragen zu bestimmten
                    Produkten schicken können. Der Transfer Ihrer Daten
                    erfolgt dabei verschlüsselt. Zum Ausfüllen des
                    Kontaktformulars fragen wir von Ihnen auch
                    personenbezogene Daten wie Ihren Vornamen, Ihren Nachnamen
                    und Ihre E-Mail-Adresse ab. Alle als Pflichtfelder
                    gekennzeichneten Datenfelder sind zur Bearbeitung Ihres
                    Anliegens erforderlich. Eine Nichtbereitstellung hat zur
                    Folge, dass wir Ihr Anliegen nicht bearbeiten können. Die
                    Bereitstellung von weiteren Daten erfolgt freiwillig. Sie
                    können uns alternativ auch über die angegebenen Adressen
                    eine E-Mail-Nachricht schicken. Die im Zusammenhang mit
                    dem Kontaktformular eingegebenen personenbezogenen Daten
                    benötigen wir, um Ihre Anfrage zu bearbeiten.
                    Rechtsgrundlage für die Datenverarbeitung ist daher Art.6
                    Abs.1 lit.b DSGVO, wenn Ihre Anfrage sich auf ein
                    bestehendes Vertragsverhältnis oder vorvertragliche
                    Maßnahmen bezieht, anderenfalls Art.6 Abs.1 lit.f DSGVO,
                    da wir ein berechtigtes Interesse an der Bearbeitung Ihrer
                    Anfrage haben.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-center justify-center">
                  <b className="w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                    3. Cookies
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-black">
                  <div className="self-stretch relative leading-[125%]">
                    <p className="m-0">
                      Wir verwenden auf unserer Webseite Cookies. Bei Cookies
                      handelt es sich um kleine Textdateien, die durch Ihren
                      Browser gespeichert werden, wenn Sie eine Webseite
                      besuchen. Hierdurch wird der verwendete Browser
                      gekennzeichnet und kann durch unseren Webserver
                      wiedererkannt werden. Unsere Webseite enthält notwendige
                      und nicht-notwendige Cookies. Notwendige Cookies sind
                      erforderlich, damit unsere Webseite funktioniert.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Soweit es durch die Verwendung notwendiger Cookies zu
                      einer Verarbeitung personenbezogener Daten kommt, beruht
                      diese auf der Rechtsgrundlage des Art.6 Abs.1 lit.f
                      DSGVO. Diese Verarbeitung dient unserem berechtigten
                      Interesse, unsere Webseite nutzerfreundlicher,
                      effektiver und sicherer zu machen.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Mit Ihrer Einwilligung verwenden wir Analyse-Cookies zu
                      Analyse- und Werbezwecken. Rechtsgrundlage hierfür ist
                      Ihre Einwilligung gemäß Art.6 Abs.1 lit.a DSGVO, wenn
                      Sie diese erteilt haben. Ihre Einwilligung ist jederzeit
                      für die Zukunft widerrufbar.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      So genannte „Session-Cookies“ werden nach Ende Ihres
                      Besuchs automatisch gelöscht. Andere Cookies
                      („persistente Cookies“) werden automatisiert nach einer
                      vorgegebenen Dauer gelöscht, die sich je nach Cookie
                      unterscheiden kann. Sie können die Cookies in den
                      Sicherheitseinstellungen Ihres Browsers jederzeit
                      löschen. Sie können der Verwendung von Cookies durch
                      Ihre Browsereinstellungen grundsätzlich oder für
                      bestimmte Fälle widersprechen.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0 text-giga-fiber-lila">
                      <span className="text-black">
                        Sie haben die Möglichkeit über unser Banner, welches
                        bei jeder Session am Ende unserer Webseite erscheint,
                        Cookies zu setzen bzw. aktiv auszuschalten.
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://gf-netz.de/datenschutz/#"
                        target="_blank"
                      >
                        <span className="[text-decoration:underline]">
                          Die Einstellungen erreichen Sie hier. Weitere
                          Informationen hierzu bietet Ihnen das Bundesamt für
                          Sicherheit in der Informationstechnik hier an. Eine
                          Übersicht über die von uns gesetzten Cookies finden
                          Sie hier. AUSSEHEND
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-center justify-center">
                  <b className="w-full max:w-[33.625rem] relative leading-[125%] uppercase inline-block shrink-0">
                    4. Eingebundene Dienste und Inhalte Dritter
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-black">
                  <div className="self-stretch relative leading-[125%]">
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        Wir nutzen auf unserer Webseite durch Drittanbieter
                        bereitgestellte Dienste, Services und Inhalte. Für
                        eine solche Einbindung ist eine Verarbeitung Ihrer
                        IP-Adresse technisch notwendig, damit die Inhalte an
                        Ihren Browser gesendet werden können. Ihre IP-Adresse
                        wird daher an die jeweiligen Drittanbieter
                        übermittelt. Die Details der Datenverarbeitung und die
                        jeweilige Rechtsgrundlage können Sie den weiteren
                        Ausführungen in diesem Abschnitt entnehmen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        &nbsp;
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        Konkret benutzten wir folgende Dienste und Inhalte
                        Dritter:
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        &nbsp;
                      </span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.1 WP STATISTICA
                      </b>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Diese Website nutzt das Analysetool WP Statistics, um
                        Besucherzugriffe statistisch auszuwerten. Anbieter ist
                        Veronalabs, ARENCO Tower, 27th Floor, Dubai Media
                        City, Dubai, Dubai 23816, UAE (
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://veronalabs.com/"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://veronalabs.com
                          </span>
                        </span>
                      </a>
                      <span>).</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Mit WP Statistics können wir die Nutzung unserer
                        Website analysieren. WP Statistics erfasst dabei u. a.
                        Logdateien (IP-Adresse, Referrer, verwendete Browser,
                        Herkunft des Nutzers, verwendete Suchmaschine) und
                        Aktionen, die die Websitebesucher auf der Seite
                        getätigt haben (z. B. Klicks und Ansichten).
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die mit WP Statistics erfassten Daten werden
                        ausschließlich auf unserem eigenen Server gespeichert
                        und nicht an WordPress weitergegeben.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage
                        von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
                        berechtigtes Interesse an der anonymisierten Analyse
                        des Nutzerverhaltens, um sowohl unser Webangebot als
                        auch unsere Werbung zu optimieren. Sofern eine
                        entsprechende Einwilligung abgefragt wurde (z. B. eine
                        Einwilligung zur Speicherung von Cookies), erfolgt die
                        Verarbeitung ausschließlich auf Grundlage von Art.6
                        Abs.1 lit.a DSGVO; die Einwilligung ist jederzeit
                        widerrufbar.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.2 GOOGLE ANALYTICS
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        Unsere Webseite nutzt Google Analytics, einen
                        Webtracking-Dienst der Google Ireland Ltd., Gordon
                        House, Barrow Street, Dublin 4, Irland („Google“).
                        Zweck unserer Nutzung des Tools ist es, die Analyse
                        Ihrer Nutzerinteraktionen auf Webseiten zu ermöglichen
                        und durch die gewonnenen Statistiken und Berichte
                        unser Angebot zu verbessern und für Sie als Nutzer
                        interessanter zu gestalten.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die Interaktionen zwischen Ihnen als Nutzer und
                        unserer Webseite erfassen wir in erster Linie mithilfe
                        von Cookies, Daten zum Gerät/Browser, IP-Adressen und
                        Webseiten- oder App-Aktivitäten. In Google Analytics
                        wird außerdem Ihre IP-Adresse erfasst, um die
                        Sicherheit des Dienstes zu gewährleisten und um uns
                        als Webseitenbetreiber Aufschluss darüber zu geben,
                        aus welchem Land, welcher Region oder welchem Ort der
                        jeweilige Nutzer stammt (sog.
                        „IP-Standortbestimmung“). Zu Ihrem Schutz nutzen wir
                        aber natürlich die Anonymisierungsfunktion („IP
                        Masking“), d.h. dass Google innerhalb der EU/des EWR
                        die IP-Adressen um das letzte Oktett kürzt.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Google verarbeitet die über Google Analytics erhobenen
                        Daten auch zu eigenen Zwecken im Umfang entsprechend
                        der eigenen Datenschutzerklärung. Die Daten können
                        durch Google in Nutzungsprofilen gespeichert und
                        beispielsweise zur Produktverbesserung, zur
                        Entwicklung neuer Produkte, zur Messung der
                        Effektivität bestimmter Werbung und Marktforschung
                        sowie zur Personalisierung von Inhalten und
                        Werbeanzeigen verarbeitet werden. Wenn Sie bei Google
                        eingeloggt sind, werden Ihre Daten direkt dem
                        Nutzerkonto zugeordnet. Wenn Sie die Zuordnung zu
                        Ihrem Nutzerkonto bei Google nicht wünschen, müssen
                        Sie sich vor der Aktivierung von Google Analytics
                        ausloggen. Wir haben keinen Einfluss auf die weitere
                        Verarbeitung Deiner Daten bei Google. Nähere
                        Informationen hierzu finden Sie in der
                        Datenschutzerklärung von Google:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://policies.google.com/privacy"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://policies.google.com/privacy
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Rechtsgrundlage für die Erhebung und weitere
                        Verarbeitung der Informationen (die maximal für 12
                        Monate erfolgt) ist im Consent-Manager erteilte
                        Einwilligung (Art.6 Abs.1 lit.a) DS-GVO).
                        Rechtsgrundlage für den Einsatz von Cookies oder
                        ähnliche Technologien auf Deinem Endgerät ist § 25
                        Abs. 1 TTDSG. Der Widerruf Ihrer Einwilligungen ist
                        jederzeit möglich, ohne dass davon die Zulässigkeit
                        der Verarbeitung bis zum Widerruf berührt wird. Den
                        Widerruf können Sie am einfachsten über unseren
                        Consent-Manager durchführen oder das Browser-Add-on
                        von Google installieren, das über folgenden Link
                        abrufbar ist:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://tools.google.com/dlpage/gaoptout?hl=de"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://tools.google.com/dlpage/gaoptout?hl=de
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Nähere Informationen zum Leistungsumfang von Google
                        Analytics erhalten Sie unter
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://marketingplatform.google.com/about/analytics/terms/de/"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline] break-words">
                            https://marketingplatform.google.com/about/analytics/terms/de/
                          </span>
                        </span>
                      </a>
                      <span>
                        . Informationen zur Datenverarbeitung bei Nutzung von
                        Google Analytics stellt Google unter folgendem Link
                        bereit:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://support.google.com/analytics/answer/6004245?hl=de"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline] break-words">
                            https://support.google.com/analytics/answer/6004245?hl=de
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Im Zusammenhang mit den oben genannten Funktionen kann
                        Google die dabei verarbeiteten Daten auch an Server
                        außerhalb der EU, insbesondere in den USA,
                        übermitteln, soweit dies zur Erbringung dieser Dienste
                        notwendig ist. Rechtsgrundlage für die
                        Datenübertragung in die USA ist der zwischen der EU
                        und den USA abgeschlossen Angemessenheitsbeschluss
                        gemäß Art. 45 DS-GVO („Data Privacy Framework“).
                        Danach gelten die USA als sicheres Drittland. Google
                        LLC, 1600 Amphitheater Pkwy, Mountain View, California
                        94043-1351, USA ist gemäß dem Data Privacy Framework
                        zertifiziert.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.3 GOOGLE TAG MANAGER
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        Diese Webseite nutzt Funktionen des Webanalysedienstes
                        Google Analytics mit dem Google Tag Manager. Anbieter
                        ist die Google LLC, 1600 Amphitheatre Parkway,
                        Mountain View, CA 94043, USA.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Google Analytics verwendet Cookies, die auf Ihrem
                        Endgerät gespeichert und von uns ausgelesen werden
                        können. Details zu den von Google Analytics
                        verwendeten Cookies finden Sie in
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://gf-netz.de/datenschutz/#"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            unserer Cookie-Policy
                          </span>
                        </span>
                      </a>
                      <span>
                        . Mit Google Analytics sind wir in der Lage,
                        Nutzungsdaten unserer Webseite auszuwerten. Die
                        Datenverarbeitung erfolgt auf der Grundlage Ihrer
                        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die durch Cookies erzeugten Informationen über Ihre
                        Benutzung unserer Webseite werden in der Regel an
                        einen Server von Google in den USA übertragen und dort
                        gespeichert. Für die USA besteht kein
                        Angemessenheitsbeschluss der EU-Kommission. Da wir die
                        IP-Anonymisierung auf unserer Webseite aktiviert
                        haben, wird Ihre IP-Adresse von Google jedoch zuvor
                        innerhalb von Mitgliedstaaten der Europäischen Union
                        gekürzt. Nur in Ausnahmefällen wird die volle
                        IP-Adresse an einen Server von Google in den USA
                        übertragen und erst dort gekürzt (weitere
                        Informationen zu Zweck und Umfang der Datenerhebung
                        erhalten Sie z. B. unter
                      </span>
                      <a
                        className="text-[inherit]"
                        href={`https://policies.google.com/privacy?hl=de&gl=de`}
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">{`https://policies.google.com/privacy?hl=de&gl=de`}</span>
                        </span>
                      </a>
                      <span>
                        ). Wir haben mit Google LLC (USA) zudem einen Vertrag
                        zur Auftragsverarbeitung nach Art.28 DSGVO
                        geschlossen. Google wird alle Informationen demnach
                        nur streng zweckgebunden nutzen, um die Nutzung
                        unserer Webseiten für uns auszuwerten und Reports über
                        die Webseitenaktivitäten zusammenzustellen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.4 GOOGLE WEB FONTS (LOKALES HOSTING)
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        Diese Seite nutzt zur einheitlichen Darstellung von
                        Schriftarten so genannte Web Fonts, die von Google
                        bereitgestellt werden. Die Google Fonts sind lokal
                        installiert. Eine Verbindung zu Servern von Google
                        findet dabei nicht statt.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Weitere Informationen zu Google Web Fonts finden Sie
                        unter
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://developers.google.com/fonts/faq"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://developers.google.com/fonts/faq
                          </span>
                        </span>
                      </a>
                      <span>und in der Datenschutzerklärung von Google:</span>
                      <a
                        className="text-[inherit]"
                        href="https://policies.google.com/privacy?hl=de"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://policies.google.com/privacy?hl=de
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.5 FONT AWESOME (LOKALES HOSTING)
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        Diese Seite nutzt zur einheitlichen Darstellung von
                        Schriftarten Font Awesome. Font Awesome ist lokal
                        installiert. Eine Verbindung zu Servern von Fonticons,
                        Inc. findet dabei nicht statt.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Weitere Informationen zu Font Awesome finden Sie in
                        der Datenschutzerklärung für Font Awesome unter:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://fontawesome.com/privacy"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://fontawesome.com/privacy
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.6 GOOGLE MAPS
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        Diese Seite nutzt den Kartendienst Google Maps.
                        Anbieter ist die Google Ireland Limited („Google“),
                        Gordon House, Barrow Street, Dublin 4, Irland.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Zur Nutzung der Funktionen von Google Maps ist es
                        notwendig, Ihre IP-Adresse zu speichern. Diese
                        Informationen werden in der Regel an einen Server von
                        Google in den USA übertragen und dort gespeichert. Der
                        Anbieter dieser Seite hat keinen Einfluss auf diese
                        Datenübertragung. Wenn Google Maps aktiviert ist, kann
                        Google zum Zwecke der einheitlichen Darstellung der
                        Schriftarten Google Web Fonts verwenden. Beim Aufruf
                        von Google Maps lädt Ihr Browser die benötigten Web
                        Fonts in ihren Browsercache, um Texte und Schriftarten
                        korrekt anzuzeigen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die Nutzung von Google Maps erfolgt im Interesse einer
                        ansprechenden Darstellung unserer Online-Angebote und
                        an einer leichten Auffindbarkeit der von uns auf der
                        Website angegebenen Orte. Dies stellt ein berechtigtes
                        Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                        Sofern eine entsprechende Einwilligung abgefragt
                        wurde, erfolgt die Verarbeitung ausschließlich auf
                        Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
                        Einwilligung ist jederzeit widerrufbar.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die Datenübertragung in die USA wird auf die
                        Standardvertragsklauseln der EU-Kommission gestützt.
                        Details finden Sie hier:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://privacy.google.com/businesses/gdprcontrollerterms/"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline] break-words">
                            https://privacy.google.com/businesses/gdprcontrollerterms/
                          </span>
                        </span>
                      </a>
                      <br />
                      <span>und</span>
                      <a
                        className="text-[inherit]"
                        href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline] break-words">
                            https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Mehr Informationen zum Umgang mit Nutzerdaten finden
                        Sie in der Datenschutzerklärung von Google:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://policies.google.com/privacy?hl=de"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://policies.google.com/privacy?hl=de
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.7 GOOGLE RECAPTCHA
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        Wir nutzen „Google reCAPTCHA“ (im Folgenden
                        „reCAPTCHA“) auf dieser Website. Anbieter ist die
                        Google Ireland Limited („Google“), Gordon House,
                        Barrow Street, Dublin 4, Irland.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Mit reCAPTCHA soll überprüft werden, ob die
                        Dateneingabe auf dieser Website (z.B. in einem
                        Kontaktformular) durch einen Menschen oder durch ein
                        automatisiertes Programm erfolgt. Hierzu analysiert
                        reCAPTCHA das Verhalten des Websitebesuchers anhand
                        verschiedener Merkmale. Diese Analyse beginnt
                        automatisch, sobald der Websitebesucher die Website
                        betritt. Zur Analyse wertet reCAPTCHA verschiedene
                        Informationen aus (z.B. IP-Adresse, Verweildauer des
                        Websitebesuchers auf der Website oder vom Nutzer
                        getätigte Mausbewegungen). Die bei der Analyse
                        erfassten Daten werden an Google weitergeleitet.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die reCAPTCHA-Analysen laufen vollständig im
                        Hintergrund. Websitebesucher werden nicht darauf
                        hingewiesen, dass eine Analyse stattfindet.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die Speicherung und Analyse der Daten erfolgt auf
                        Grundlage von Art.6 Abs.1 lit.f DSGVO. Der
                        Websitebetreiber hat ein berechtigtes Interesse daran,
                        seine Webangebote vor missbräuchlicher automatisierter
                        Ausspähung und vor SPAM zu schützen. Sofern eine
                        entsprechende Einwilligung abgefragt wurde, erfolgt
                        die Verarbeitung ausschließlich auf Grundlage von
                        Art.6 Abs.1 lit.a DSGVO; die Einwilligung ist
                        jederzeit widerrufbar.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Weitere Informationen zu Google reCAPTCHA entnehmen
                        Sie den Google-Datenschutzbestimmungen und den Google
                        Nutzungsbedingungen unter folgenden Links:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://policies.google.com/privacy?hl=de"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://policies.google.com/privacy?hl=de
                          </span>
                        </span>
                      </a>
                      <span>und</span>
                      <a
                        className="text-[inherit]"
                        href="https://policies.google.com/terms?hl=de"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://policies.google.com/terms?hl=de
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.8 GOOGLE REMARKETING
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        GIGA FIBER Netz GmbH verwendet auf seiner Website das
                        Online-Werbeprogramm „Google Ads“ und in diesem Rahmen
                        Conversion-Tracking (Besuchsaktions-Auswertung). Das
                        Google Conversion Tracking ist ein Analysedienst der
                        Google Ireland Limited, Gordon House, 4 Barrow St,
                        Dublin, D04 E5W5, Irland. Wenn Sie auf eine von Google
                        geschaltete Anzeige klicken, wird ein Cookie für das
                        Conversion-Tracking auf Ihrem Rechner abgelegt. Diese
                        Cookies haben eine begrenzte Gültigkeit, enthalten
                        keine personenbezogenen Daten und dienen somit nicht
                        der persönlichen Identifizierung. Wenn Sie unsere
                        Webseite besuchen und das Cookie noch nicht abgelaufen
                        ist, können Google und wir erkennen, dass Sie die
                        Anzeige geklickt haben und Sie zu dieser Webseite
                        weitergeleitet wurden. Jeder Google Ads-Kunde erhält
                        ein anderes Cookie. Somit besteht keine Möglichkeit,
                        dass Cookies über die Websites von Ads-Kunden
                        nachverfolgt werden können. Die Informationen, die mit
                        Hilfe des Conversion-Cookies eingeholt werden, dienen
                        dem Zweck Conversion-Statistiken zu erstellen. Hierbei
                        erfahren wir die Gesamtanzahl der Nutzer, die auf eine
                        unserer An-zeigen geklickt haben und zu einer mit
                        einem Conversion-Tracking-Tag versehenen Seite
                        weitergeleitet wurden. Wir erhalten jedoch keine
                        Informationen, mit denen sich Nutzer persönlich
                        identifizieren lassen. Weiterführende Informatio-nen
                        sowie die Datenschutzerklärung von Google finden Sie
                        unter:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://policies.google.com/privacy"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://policies.google.com/privacy
                          </span>
                        </span>
                      </a>
                    </p>
                    <p className="m-0">
                      <span>
                        Diese Website nutzt den Dienst Google-Remarketing.
                        Google-Remarketing ist ein Online-Werbeprogramm der
                        Google Ireland Limited, Gordon House, Barrow Street,
                        Dublin 4, Ireland (“Google”). Dabei verwenden wir die
                        Remarketing-Funktion innerhalb des Google
                        Ads-Dienstes. Mit der Remarketing-Funktion können wir
                        Ihnen auf anderen Websites/Apps innerhalb des Google
                        Werbenetzwerks auf Ihren Interessen basierende
                        Werbeanzeigen präsentieren. Dafür wird Ihr
                        Surfverhalten auf unserer Website analysiert, z.B.
                        welche Angebote Sie sich angesehen haben
                        (Trackingdaten). Hierdurch können wir Ihnen auch nach
                        Ihrem Besuch unserer Website auf der
                        Online-Suchmaschine Google selbst, sog. „Google
                        Anzeigen“ und auf anderen Websites/Apps
                        individualisierte Werbung anzeigen. Hierfür speichert
                        Google einen Cookie in Ihrem Browser, wenn Sie
                        Google-Dienste oder Websites im Google Werbenetzwerk
                        besuchen. Über diesen Cookie werden Ihre Besuche
                        erfasst. Der Cookie dient zur eindeutigen
                        Identifikation Ihres Webbrowsers und nicht der
                        Identifikation Ihrer Person. Eine derartige
                        Weiterverarbeitung der Daten sowie die Verarbeitung
                        der Daten nach deren Übermittlung durch GlobalConnect
                        an Google erfolgt durch die Google Ireland Limited als
                        alleinig datenschutzrechtlich Verantwortliche. In
                        diesem Zusammenhang kann die Google Ireland Limited
                        als datenschutzrechtlich alleinig Verantwortliche
                        Daten über Sie in den USA speichern. Der Europäische
                        Gerichtshof hat in Bezug auf die USA festgestellt,
                        dass es sich bei diesen um ein Land mit einem nicht
                        ausreichenden Datenschutzniveau handelt. In diesem
                        Zusammenhang besteht insbesondere die Gefahr, dass
                        Ihre Daten durch amerikanische Institutionen/Behörden
                        zu Kontroll- und zu Überwachungszwecken verarbeitet
                        werden, ohne dass Ihrerseits ein ausreichender
                        Rechtsbehelf hiergegen gegeben ist.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Nähere Informationen zu Google-Remarketing sowie die
                        Datenschutzerklärung von Google können Sie hier
                      </span>
                      <a
                        className="text-[inherit]"
                        href={`https://policies.google.com/privacy?hl=de&gl=de`}
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">{`https://policies.google.com/privacy?hl=de&gl=de`}</span>
                        </span>
                      </a>
                      <span>
                        einsehen. Hier können Sie auch Ihre Betroffenenrechte
                        (z.B. Recht auf Löschung) im Hinblick auf die Daten,
                        die Google als datenschutzrechtlich Verantwortliche
                        verarbeitet, geltend machen. Ihre für den Einsatz des
                        Google-Remarketing erteilte Einwilligung können Sie
                        hier widerrufen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.9 SOCIAL-MEDIA-SEITEN
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        Wir unterhalten in sozialen Netzwerken öffentlich
                        zugängliche Profile. Ihr Besuch dieser Profile setzt
                        eine Vielzahl von Datenverarbeitungsvorgängen in Gang.
                        Nachfolgend geben wir Ihnen einen Überblick darüber,
                        welche Ihrer personenbezogenen Daten von uns erhoben,
                        genutzt und gespeichert werden, wenn Sie unsere
                        Profile in sozialen Netzwerken besuchen.
                        Personenbezogene Daten sind dabei solche Angaben, die
                        sich Ihnen als bestimmte Person zuordnen lassen (z.B.
                        Name, Alter, Anschrift, Fotos, E-Mail-Adressen, u.U.
                        auch IP-Adressen). Sie sind nicht verpflichtet, uns
                        Ihre personenbezogenen Daten zu überlassen. Allerdings
                        kann dies für einzelne Funktionalitäten unserer
                        Profile in sozialen Netzwerken erforderlich sein.
                        Diese Funktionalitäten stehen Ihnen nicht oder nur
                        eingeschränkt zur Verfügung, wenn Sie uns Ihre
                        personenbezogenen Daten nicht überlassen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        &nbsp;
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        Bei Ihrem Besuch unserer Profile werden Ihre
                        personenbezogenen Daten nicht nur durch uns, sondern
                        auch durch die Betreiber des jeweiligen sozialen
                        Netzwerks erhoben, verarbeitet und genutzt. Dies
                        geschieht auch dann, wenn Sie selbst kein Profil in
                        dem jeweiligen sozialen Netzwerk haben. Wir haben
                        keinen Einfluss darauf und keine genaue Kenntnis
                        davon, wie die Betreiber die Daten aus Ihrem Besuch
                        unserer Fanpage und aus Ihren Interaktionen mit
                        unseren Beiträgen zu eigenen Zwecken verarbeiten, wie
                        lange diese gespeichert werden und ob die Daten an
                        Dritte weitergegeben werden. Die Datenverarbeitung
                        kann sich danach unterscheiden, ob Sie bei dem
                        sozialen Netzwerk registriert und angemeldet sind oder
                        als nicht-registrierter und/oder nicht-angemeldeter
                        Nutzer die Seite besuchen. Beim Zugriff auf die
                        Fanpage oder einen Beitrag wird die Ihrem Endgerät
                        zugeteilte IP-Adresse an den Betreiber des jeweiligen
                        sozialen Netzwerks übermittelt. Sind Sie in dem
                        sozialen Netzwerk aktuell angemeldet, kann über ein
                        Cookie auf Ihrem Endgerät nachvollzogen werden, wie
                        Sie sich im Internet bewegt haben. Über in Webseiten
                        eingebundene Buttons ist es den Betreibern des
                        jeweiligen sozialen Netzwerks möglich, Ihre Besuche
                        auf diesen Webseiten zu erfassen und Ihrem jeweiligen
                        Profil zuzuordnen. Anhand dieser Daten können Inhalte
                        oder Werbung auf Sie zugeschnitten angeboten werden.
                        Wenn Sie dies vermeiden möchten, sollten Sie sich
                        abmelden bzw. die Funktion „angemeldet bleiben“
                        deaktivieren, die auf Ihrem Gerät vorhandenen Cookies
                        löschen und Ihren Browser neu starten.
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        &nbsp;
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        Einzelheiten über die Erhebung und Speicherung Ihrer
                        persönlichen Daten sowie über Art, Umfang und Zweck
                        ihrer Verwendung durch den Betreiber des jeweiligen
                        sozialen Netzwerks können Sie den
                        Datenschutzerklärungen des jeweiligen Betreibers und
                        den nachfolgenden Erklärungen entnehmen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        &nbsp;
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        Zweck der Datenverarbeitung durch uns auf unseren
                        Social-Media-Präsenzen ist die Information unserer
                        Kunden oder sonstiger interessierter Personen über
                        unsere Angebote, Produkte, Dienstleistungen, Aktionen,
                        Sachthemen und Unternehmensneuigkeiten, die
                        Interaktion mit den Besuchern unserer
                        Social-Media-Auftritte zu diesen Themen sowie die
                        Beantwortung entsprechender Rückfragen, Lob oder
                        Kritik.
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        &nbsp;
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        Die Verarbeitung Ihrer personenbezogenen Daten
                        anlässlich des Besuches unserer Social-Media-Präsenzen
                        erfolgt auf Grundlage unserer berechtigten Interessen
                        an einer effektiven Information der Nutzer und
                        Kommunikation mit den Nutzern gemäß Art. 6 Abs. 1 lit.
                        f) DS-GVO. Überwiegende entgegenstehende Interessen
                        von Ihnen sind nicht erkennbar, wenn Sie die sozialen
                        Netzwerke freiwillig und in Kenntnis der jeweiligen
                        Nutzungsbedingungen und Datenschutzhinweise nutzen,
                        zumal wir die Inhalte nach Möglichkeit stets auch über
                        alternative Kommunikationskanäle, wie unsere Webseite,
                        bereitstellen. Sofern Sie selbst bei den sozialen
                        Netzwerken angemeldet sind, erfolgt die Verarbeitung
                        gemäß Art. 6 Abs. 1 lit. b) DS-GVO zudem in
                        Übereinstimmung mit den Nutzungsbedingungen, die
                        zwischen Ihnen und dem sozialen Netzwerk gelten.
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        &nbsp;
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        Wir behalten uns lediglich vor, Inhalte zu löschen,
                        sofern dies erforderlich sein sollte. Ggf. teilen wir
                        Ihre Inhalte auf unserer Seite, wenn dies eine
                        Funktion des sozialen Netzwerks ist, und kommunizieren
                        über die Plattform mit Ihnen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-saira-condensed text-black">
                        &nbsp;
                      </span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.10 FACEBOOK UND INSTAGRAM
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        Unsere Facebook und Instagram Seiten (nachfolgend
                        gemeinsam “Facebook”) sind über die Plattform von Meta
                        erreichbar, die in der Europäischen Union betrieben
                        wird von: Meta Platforms Ireland Ltd., 4 Grand Canal
                        Square, Grand Canal Harbour, Dublin 2, Irland
                        („Meta“).
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Eigenständige Verarbeitung von Nutzungsdaten durch
                        Meta: Wenn Sie unsere Facebook-Seite besuchen, erhebt
                        Meta Nutzungsdaten. Für diese Datenverarbeitungen ist
                        grundsätzlich allein Meta datenschutzrechtlich
                        verantwortlich. Informationen hierzu stellt Meta in
                        seiner Datenrichtlinie unter
                      </span>
                      <a
                        className="text-[inherit]"
                        href={`https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0`}
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">{`https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0`}</span>
                        </span>
                      </a>
                      <span>sowie der Cookie-Richtlinie unter</span>
                      <a
                        className="text-[inherit]"
                        href={`https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0`}
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline] break-words">{`https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0`}</span>
                        </span>
                      </a>
                      <span>zur Verfügung.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die in diesem Zusammenhang über Sie erhobenen Daten
                        werden von Meta verarbeitet und dabei gegebenenfalls
                        in Länder außerhalb der EU übertragen. Welche
                        Informationen Meta erhält und wie diese verwendet
                        werden, beschreibt Meta in seinen
                        Datenverwendungsrichtlinien. Dort finden Sie auch
                        Informationen über Kontaktmöglichkeiten zu Meta sowie
                        zu den Einstellmöglichkeiten für Werbeanzeigen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Beim Zugriff auf eine Facebook-Seite wird die Ihrem
                        Endgerät zugeteilte IP-Adresse an Meta übermittelt.
                        Nach Auskunft von Meta wird diese IP-Adresse
                        anonymisiert. Meta speichert darüber hinaus
                        Informationen über die Endgeräte seiner Nutzer (z.B.
                        im Rahmen der Funktion „Anmeldebenachrichtigung“);
                        gegebenenfalls ist Meta damit eine Zuordnung von
                        IP-Adressen zu einzelnen Nutzern möglich.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Wenn Sie als Nutzer aktuell bei Facebook angemeldet
                        sind, befindet sich auf Ihrem Endgerät ein Cookie mit
                        Ihrer Facebook-Kennung. Dadurch ist Meta in der Lage
                        nachzuvollziehen, dass Sie die jeweilige Seite
                        aufgesucht und wie Sie sie genutzt haben. Dies gilt
                        auch für alle anderen Facebook-Seiten. Über in
                        Webseiten eingebundene Facebook-Buttons ist es Meta
                        möglich, Ihre Besuche auf diesen Webseiten zu erfassen
                        und Ihrem Facebook-Profil zuzuordnen. Anhand dieser
                        Daten können Inhalte oder Werbung auf Sie
                        zugeschnitten angeboten werden.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Wenn Sie dies vermeiden möchten, sollten Sie sich bei
                        Facebook abmelden bzw. die Funktion „angemeldet
                        bleiben” deaktivieren, die auf Ihrem Gerät vorhandenen
                        Cookies löschen und Ihren Browser beenden und neu
                        starten. Auf diese Weise werden
                        Facebook-Informationen, über die Sie unmittelbar
                        identifiziert werden können, gelöscht. Damit können
                        Sie die Facebook-Fanpage nutzen, ohne dass Ihre
                        Facebook-Kennung offenbart wird. Wenn Sie auf
                        interaktive Funktionen der Seite zugreifen (Gefällt
                        mir, Kommentieren, Teilen, Nachrichten etc.),
                        erscheint eine Facebook-Anmeldemaske. Nach einer
                        etwaigen Anmeldung sind Sie für Facebook erneut als
                        Nutzer erkennbar.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Nach eigenen Angaben speichert Meta die Daten, bis sie
                        nicht mehr benötigt werden, um die Dienste und
                        Facebook-Produkte bereitzustellen, oder bis das
                        jeweilige Nutzerkonto gelöscht wird, je nachdem, was
                        zuerst eintritt. Dies hängt von den Umständen des
                        Einzelfalles ab, insbesondere der Art der Daten, warum
                        sie erfasst und verarbeitet werden sowie den
                        relevanten rechtlichen oder betrieblichen
                        Speicherbedürfnissen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Im Zusammenhang mit den oben genannten Funktionen kann
                        Meta die dabei verarbeiteten Daten auch an Server
                        außerhalb der EU, insbesondere der Meta Platforms Inc.
                        in den USA, übermitteln, soweit dies zur Erbringung
                        dieser Dienste notwendig ist. Für die USA besteht mit
                        dem EU-U.S. Data Privacy Framework ein
                        Angemessenheitsbeschluss der EU-Kommission, der
                        zertifizierten Unternehmen ein angemessenes
                        Datenschutzniveau im Sinne der DS-GVO bescheinigt. Die
                        Meta Platforms Inc. ist unter dem EU-U.S. Data Privacy
                        Framework zertifiziert und auch in die vom U.S.
                        Department of Commerce geführte Liste (Data Privacy
                        Framework List) eingetragen. Bei der Übermittlung von
                        Daten an Server der Meta Platforms Inc. in den USA ist
                        daher ein durchgängig hohes Datenschutzniveau
                        gewährleistet. Soweit eine Übermittlung der Daten in
                        die USA erfolgt, basiert ein solcher Drittlandtransfer
                        auf Art. 45 Abs. 1 Satz 1 DS-GVO.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Verarbeitung von Nutzungsdaten in gemeinsamer
                        Verantwortlichkeit: Wenn Sie unsere Facebook-Seite
                        besuchen, verwendet Meta bestimmte Nutzungsdaten
                        (z.B., ob Sie bestimmte Beträge mit „Gefällt mir“
                        markiert oder kommentiert haben) auch, um uns
                        zusammengefasste Nutzungsstatistiken (sog.
                        „Seiten-Insights“) zur Verfügung zu stellen.
                        Nutzungsstatistiken lassen keinen Rückschluss auf das
                        Verhalten einzelner Nutzer zu, sondern geben uns
                        lediglich einen Überblick über die Nutzung der
                        Facebook-Seite (z.B. welche Beiträge besonders häufig
                        angeklickt wurden). Wir haben selbst keinen Zugriff
                        auf die für die Erstellung der Statistiken
                        verarbeiteten personenbezogenen Daten. Welche
                        Nutzungshandlungen durch Facebook protokolliert
                        werden, legt allein Meta fest und kann durch uns nicht
                        eingerichtet, geändert oder auf sonstige Weise
                        beeinflusst werden.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Wir lassen uns von Meta Nutzungsstatistiken zur
                        Verfügung stellen, um die auf Facebook
                        veröffentlichten Beiträge zu verbessern und für die
                        Nutzer möglichst interessant gestalten zu können.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Für die Verarbeitung von personenbezogenen Daten für
                        die Erstellung dieser Nutzungsstatistiken sind Meta
                        und wir gemeinsam Verantwortliche gemäß Art. 26
                        DS-GVO.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Die Informationen von Facebook zu den Seiten-Insights
                        unter
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://de-de.facebook.com/legal/terms/page_controller_addendum"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline] break-words">
                            https://de-de.facebook.com/legal/terms/page_controller_addendum
                          </span>
                        </span>
                      </a>
                      <span>
                        beschreiben, welche Daten im Rahmen der gemeinsamen
                        Verantwortlichkeit verarbeitet werden, und enthalten
                        die „Seiten-Insights-Ergänzung“, in der Meta und wir
                        vertraglich festgelegt haben, wer welche
                        Verpflichtungen nach der DS-GVO erfüllt.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Verarbeitung Ihrer Daten bei der Kommunikation über
                        Facebook: Wenn Sie mit uns über die Facebook-Seite
                        Kontakt aufnehmen, indem Sie z.B. einen Beitrag
                        kommentieren oder uns eine Nachricht über den
                        Facebook-Messenger schreiben, verarbeiten wir Ihre
                        damit zusammenhängenden personenbezogenen Daten (z.B.
                        Ihren Namen und die Kommunikationsinhalte), um Ihr
                        Anliegen zu bearbeiten.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.11 TIKTOK
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        Unser TikTok-Profil ist über die TikTok-Plattform
                        erreichbar, die in der Europäischen Union gemeinsam
                        betrieben wird von: TikTok Technology Limited, 10
                        Earlsfort Terrace, Dublin, D02 T380, Irland und TikTok
                        Information Technologies UK Limited, 6th Floor, One
                        London Wall, London, EC2Y 5EB, England. Beide
                        Unternehmen (im Folgenden „TikTok”) handeln als
                        gemeinsam Verantwortliche gemäß Art. 26 DS-GVO.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Eigenständige Verarbeitung von Nutzungsdaten durch
                        TikTok: Wenn Sie unser TikTok-Profil besuchen, erhebt
                        TikTok Nutzungsdaten. Für diese Datenverarbeitungen
                        ist allein TikTok verantwortlich. Informationen hierzu
                        stellt TikTok in der TikTok-Datenschutzrichtlinie
                        unter
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://www.tiktok.com/legal/page/eea/privacy-policy/de-DE"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://www.tiktok.com/legal/page/eea/privacy-policy/de-DE
                          </span>
                        </span>
                      </a>
                      <span>sowie der TikTok-Cookie-Richtlinie unter</span>
                      <a
                        className="text-[inherit]"
                        href="https://www.tiktok.com/legal/tiktok-website-cookies-policy?lang=de"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://www.tiktok.com/legal/tiktok-website-cookies-policy?lang=de
                          </span>
                        </span>
                      </a>
                      <span>zur Verfügung.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        TikTok verarbeitet dabei personenbezogene Daten für
                        verschiedene Zwecke, unter anderem für die
                        Bereitstellung seiner Dienste, um die Nutzer über
                        Änderungen der Dienste benachrichtigen zu können, um
                        den Nutzern Support bieten zu können, um es den
                        Nutzern zu ermöglichen, dass diese Nutzerinhalte mit
                        anderen Nutzern teilen können, für die Entwicklung
                        neuer Dienste oder zur Erfüllung rechtlicher
                        Verpflichtungen. TikTok sammelt unter anderem folgende
                        Daten über seine Nutzer: Profildaten, Nutzerinhalte
                        und Nutzungsdaten, Standortdaten, Informationen über
                        die jeweiligen Kontakte/Freunde.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Im Zusammenhang mit den oben genannten Funktionen kann
                        TikTok die dabei verarbeiteten Daten auch an Server
                        des TikTok Konzerns außerhalb der EU, insbesondere in
                        den USA, Malaysia und Singapur, übermitteln, soweit
                        dies zur Erbringung dieser Dienste notwendig ist. Da
                        die Datenübermittlung insoweit nicht von einem
                        Angemessenheitsbeschluss abgedeckt ist, bestehen für
                        Sie erhöhte Risiken, beispielsweise kann die
                        Durchsetzung Ihrer Rechte zu diesen Daten erschwert
                        sein. Nach Angaben von TikTok werden
                        Datenübermittlungen in Drittländer, für die kein
                        Angemessenheitsbeschluss besteht, auf Basis der
                        Standarddatenschutzklauseln der EU-Kommission
                        durchgeführt. Dadurch verpflichtet sich TikTok, die
                        europäischen Datenschutzstandards auch bei
                        Übermittlungen in Drittländer zu gewährleisten. Soweit
                        eine Übermittlung der Daten in die USA oder ein
                        anderes Drittland erfolgt, basiert ein solcher
                        Drittlandtransfer auf Art. 46 Abs. 2 lit. c) DS-GVO;
                        bei verbundenen Unternehmen von TikTok mit Sitz in
                        Drittländern, für die ein Angemessenheitsbeschluss der
                        EU-Kommission vorliegt, auf Art. 45 Abs. 1 S. 1
                        DS-GVO.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Verarbeitung von Nutzungsdaten in gemeinsamer
                        Verantwortlichkeit: TikTok verwendet bestimmte Daten,
                        die von Nutzern der TikTok-Plattform erhoben wurden
                        (z.B. wie lange Nutzer ein Video angesehen haben)
                        auch, um aggregiert Nutzungsstatistiken zu erstellen
                        und den jeweiligen Betreibern des TikTok-Profils zur
                        Verfügung zu stellen (sog. „TikTok-Insights“). Auch
                        wir erhalten solche aggregierte Nutzungsstatistiken.
                        Die Informationen, die wir durch TikTok-Insights
                        erhalten, lassen keinen Rückschluss auf einzelne
                        Nutzer zu. Wir haben selbst keinen Zugriff auf
                        personenbezogene Daten, die TikTok für TikTok-Insights
                        verarbeitet. Allein TikTok legt fest, welche Daten für
                        TikTok-Insights auf welche Weise verarbeitet werden.
                        Wir können auf die Verarbeitung durch TikTok weder
                        rechtlich noch tatsächlich Einfluss nehmen. Die
                        Berichte dienen uns dazu, unser TikTok-Profil
                        entsprechend der Nutzerbedürfnisse anzupassen und
                        damit fortlaufend zu optimieren.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Für die Verarbeitung von personenbezogenen Daten für
                        die Erstellung dieser Nutzungsstatistiken sind TikTok
                        und wir gemeinsam Verantwortliche gemäß Art. 26
                        DS-GVO.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>In den Joint Controller Terms unter</span>
                      <a
                        className="text-[inherit]"
                        href="https://ads.tiktok.com/i18n/official/policy/jurisdiction-specific-terms"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline] break-words">
                            https://ads.tiktok.com/i18n/official/policy/jurisdiction-specific-terms
                          </span>
                        </span>
                      </a>
                      <span>
                        haben TikTok und wir vertraglich festgelegt, wer von
                        uns welche Verpflichtungen nach der DS-GVO erfüllt.
                        Zudem ist dort beschrieben, welche Daten im Rahmen der
                        gemeinsamen Verantwortlichkeit verarbeitet werden.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Verarbeitung Ihrer Daten bei der Kommunikation über
                        TikTok: Wenn Sie mit uns über unser TikTok-Profil
                        Kontakt aufnehmen, indem Sie z.B. einen Beitrag
                        kommentieren oder eine Nachricht über den Messenger
                        schreiben, verarbeiten wir Ihre Daten (z.B. Ihren
                        Namen und die Kommunikationsinhalte), um Ihr Anliegen
                        zu bearbeiten.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.12 TWITCH
                      </b>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Unser Twitch-Profil ist über die Twitch-Plattform
                        erreichbar, die von der Twitch Interactive, Inc. 350
                        Bush Street, 2nd Floor, San Francisco, CA 94104, USA
                        betrieben wird.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Wenn Sie unser Twitch-Profil besuchen, erhebt Twitch
                        Nutzungsdaten. Für diese Datenverarbeitungen ist
                        allein Twitch verantwortlich. Informationen hierzu
                        stellt Twitch in seiner Datenschutzerklärung unter
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://www.twitch.tv/p/de-de/legal/privacy-notice/"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://www.twitch.tv/p/de-de/legal/privacy-notice/
                          </span>
                        </span>
                      </a>
                      <span>sowie seiner Cookie-Richtlinie unter</span>
                      <a
                        className="text-[inherit]"
                        href="https://www.twitch.tv/p/de-de/legal/cookie-notice/"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://www.twitch.tv/p/de-de/legal/cookie-notice/
                          </span>
                        </span>
                      </a>
                      <span>zur Verfügung.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Twitch verarbeitet dabei personenbezogene Daten für
                        verschiedene Zwecke, unter anderem für die
                        Bereitstellung seiner Dienste, um die Nutzer über
                        Änderungen der Dienste benachrichtigen zu können, um
                        den Nutzern Support bieten zu können, um es den
                        Nutzern zu ermöglichen, dass diese Nutzerinhalte mit
                        anderen Nutzern teilen können, für die Entwicklung
                        neuer Dienste oder zur Erfüllung rechtlicher
                        Verpflichtungen. Twitch sammelt unter anderem folgende
                        Daten über seine Nutzer: Profildaten, Nutzerinhalte
                        und Nutzungsdaten, Standortdaten, Informationen über
                        die jeweiligen Kontakte.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>{`Twitch verwendet bestimmte Daten, die von Nutzern der Twitch-Plattform erhoben wurden (z.B. wie lange Nutzer ein Video angesehen haben) auch, um aggregierte Nutzungsstatistiken zu erstellen und den jeweiligen Betreibern des Twitch-Profils zur Verfügung zu stellen (sog. „Insights & Analytics“). Auch wir erhalten solche aggregierten Nutzungsstatistiken. Die Informationen, die wir durch Twitch-Insights erhalten, lassen keinen Rückschluss auf einzelne Nutzer zu. Wir haben selbst keinen Zugriff auf personenbezogene Daten, die Twitch für Twitch-Insights verarbeitet. Allein Twitch legt fest, welche Daten für Twitch-Insights auf welche Weise verarbeitet werden. Wir können auf die Verarbeitung durch Twitch weder rechtlich noch tatsächlich Einfluss nehmen. Die Berichte dienen uns dazu, unser Twitch-Profil entsprechend der Nutzerbedürfnisse anzupassen und fortlaufend zu optimieren.`}</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Im Zusammenhang mit den oben genannten Funktionen
                        übermittelt Twitch die dabei verarbeiteten Daten auch
                        an Server außerhalb der EU, insbesondere in den USA,
                        soweit dies zur Erbringung dieser Dienste notwendig
                        ist. Da die Datenübermittlung insoweit nicht von einem
                        Angemessenheitsbeschluss abgedeckt ist, bestehen für
                        Sie erhöhte Risiken, beispielsweise kann die
                        Durchsetzung Ihrer Rechte zu diesen Daten erschwert
                        sein. Nach eigenen Angaben ergreift Twitch in diesen
                        Fällen geeignete Maßnahmen, um sicherzustellen, dass
                        Ihre Daten angemessen geschützt werden. Soweit eine
                        Übermittlung der Daten in die USA oder ein anderes
                        Drittland erfolgt, basiert ein solcher
                        Drittlandtransfer auf Art. 49 Abs. 1 lit. a) DS-GVO.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Verarbeitung Ihrer Daten bei der Kommunikation über
                        Twitch: Wenn Sie mit uns über unser Twitch-Profil
                        Kontakt aufnehmen, indem Sie z.B. einen Beitrag
                        kommentieren oder eine Nachricht über den Messenger
                        schreiben, verarbeiten wir Ihre Daten (z.B. Ihren
                        Namen und die Kommunikationsinhalte), um Ihr Anliegen
                        zu bearbeiten.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.13 LINKEDIN
                      </b>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        &nbsp;
                      </b>
                    </p>
                    <p className="m-0">
                      <span>
                        Wir betreiben ein Firmenprofil auf dem Portal
                        LinkedIn, einem Angebot der LinkedIn Ireland Unlimited
                        Company, Wilton Place, Dublin 2, Irland. Wir verwenden
                        das LinkedIn-Profil, um unser Unternehmen vorzustellen
                        und mit möglichen Arbeitnehmern in Kontakt zu kommen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Sie haben die Möglichkeit, über unser LinkedIn-Profil
                        Kontakt mit uns aufzunehmen. Dabei werden die
                        verfügbaren Profildaten (z. B. Jobtitel, Firmenname,
                        Branche, Ausbildung, Berufserfahrung, Kenntnisse,
                        Kontaktmöglichkeiten, Foto) sowie der Inhalt der
                        Nachricht von uns verarbeitet, um Ihre Anfrage zu
                        bearbeiten. Rechtsgrundlage für diese
                        Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO,
                        sofern die Kommunikation dem Zweck der
                        Vertragserfüllung oder Durchführung vorvertraglicher
                        Maßnahmen dient, anderenfalls Art. 6 Abs. 1 lit. f
                        DSGVO. Wir haben ein berechtigtes Interesse daran, mit
                        unseren Nutzern über unser LinkedIn-Profil in Kontakt
                        zu treten und Anfragen zu beantworten.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Daneben können Sie unsere Beiträge teilen, mit einem
                        „Gefällt mir“ versehen oder kommentieren. Die
                        Informationen über die Interaktion sowie die
                        Profildaten werden dabei von uns verarbeitet.
                        Rechtsgrundlage der Datenverarbeitung ist Art.6 Abs.1
                        lit.f DSGVO. Wir haben ein berechtigtes Interesse, die
                        Resonanz auf unsere Beiträge nachzuvollziehen und mit
                        den Nutzern zu kommunizieren.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Beim Besuch unseres LinkedIn-Profils können
                        personenbezogene Daten von LinkedIn verarbeitet
                        werden. Wir haben auf diese Datenverarbeitung keinen
                        Einfluss. Zweck und Umfang der Datenverarbeitung durch
                        LinkedIn sowie die diesbezüglichen Rechte und
                        Einstellungsmöglichkeiten zum Schutz der Privatsphäre
                        der Nutzer, können der Datenschutzerklärung von
                        LinkedIn entnommen werden. Die Datenschutzerklärung
                        von LinkedIn finden Sie unter:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://www.linkedin.com/legal/privacy-policy?_l=de_DE"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://www.linkedin.com/legal/privacy-policy?_l=de_DE
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <b className="font-saira-condensed text-giga-fiber-lila">
                        4.14 YOUTUBE
                      </b>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Wir betreiben einen Kanal auf der Plattform YouTube,
                        einem Angebot der Google Ireland Limited, Gordon
                        House, Barrow Street Dublin 4., Irland. Wir verwenden
                        den Kanal, um unser Unternehmen in Videos vorzustellen
                        und mit interessierten Nutzern in Kontakt zu kommen.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        Nutzer haben die Möglichkeit, unseren Kanal zu
                        abonnieren, unsere Videos mit „Mag Ich“ oder „Mag Ich
                        Nicht“ zu markieren, unsere Videos zu teilen oder sie
                        zu kommentieren. Dabei werden Profildaten sowie die
                        jeweilige Interaktion von uns verarbeitet. Die
                        Datenverarbeitung beruht auf Art.6 Abs.1 lit.f DSGVO.
                        Wir haben ein berechtigtes Interesse daran, mit
                        unseren Nutzern über unseren Kanal in Kontakt zu
                        treten und Anfragen zu beantworten.
                      </span>
                    </p>
                    <p className="m-0">
                      <span>&nbsp;</span>
                    </p>
                    <p className="m-0">
                      <span>
                        Darüber hinaus werden beim Besuch unseres Kanals
                        personenbezogene Daten von Google verarbeitet. Wir
                        haben auf diese Datenverarbeitung keinen Einfluss. Sie
                        erfolgt nach der Datenschutzerklärung von Google, die
                        auch für YouTube gilt. Die Datenschutzerklärung von
                        Google finden Sie unter:
                      </span>
                      <a
                        className="text-[inherit]"
                        href="https://policies.google.com/privacy?hl=de"
                        target="_blank"
                      >
                        <span>
                          <span className="[text-decoration:underline]">
                            https://policies.google.com/privacy?hl=de
                          </span>
                        </span>
                      </a>
                      <span>.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-center justify-center">
                  <b className="w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                    5. Ihre Rechte
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-black">
                  <div className="self-stretch relative leading-[125%]">
                    <p className="m-0">
                      Als von der Datenverarbeitung betroffene Person stehen
                      Ihnen die folgenden Rechte – jeweils unter den
                      gesetzlichen Voraussetzungen und im gesetzlichen Umfang
                      – zu. Sie haben das Recht,
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <ul className="m-0 font-inherit text-inherit pl-[1.312rem]">
                      <li className="my-[undefined] mx-[undefined]">
                        Auskunft über die Verarbeitung Ihrer personenbezogenen
                        Daten zu erhalten (Art. 15 DS-GVO)
                      </li>
                      <li className="my-[undefined] mx-[undefined]">
                        unverzüglich Berichtigung der Sie betreffenden
                        unrichtigen personenbezogenen Daten und/oder
                        Vervollständigung unvollständiger personenbezogener
                        Daten zu verlangen (Art. 16 DS-GVO)
                      </li>
                      <li className="my-[undefined] mx-[undefined]">
                        die unverzügliche Löschung der Sie betreffenden
                        personenbezogenen Daten zu verlangen (Art. 17 DS-GVO)
                      </li>
                      <li className="my-[undefined] mx-[undefined]">
                        die Einschränkung der Sie betreffenden
                        Datenverarbeitung zu verlangen (Art. 18 DS-GVO)
                      </li>
                      <li className="my-[undefined] mx-[undefined]">
                        die Sie betreffenden personenbezogenen Daten, die Sie
                        bereitgestellt haben, in einem strukturierten und
                        maschinenlesbaren Format zu erhalten und diese Daten
                        einem anderen Verantwortlichen zu übermitteln (Art. 20
                        DS-GVO)
                      </li>
                      <li className="my-[undefined] mx-[undefined]">
                        aus Gründen, die sich aus Ihrer besonderen Situation
                        ergeben, der Verarbeitung der Sie betreffenden
                        personenbezogenen Daten zu widersprechen, sofern die
                        Verarbeitung auf einem berechtigten Interesse beruht;
                        sofern Ihre Daten zum Zwecke der Direktwerbung genutzt
                        werden, steht Ihnen ein jederzeitiges
                        Widerspruchsrecht zu (Art. 21 DS-GVO)
                      </li>
                      <li className="my-[undefined] mx-[undefined]">
                        Ihre Einwilligung in die Datenverarbeitung jederzeit
                        zu widerrufen, ohne dass dadurch die Rechtmäßigkeit
                        der bis zum Widerruf aufgrund der Einwilligung
                        erfolgten Datenverarbeitung berührt wird (Art. 7 Abs.
                        3 DS-GVO)
                      </li>
                      <li>
                        sich bei einer Aufsichtsbehörde über die Verarbeitung
                        Ihrer Daten zu beschweren (Art. 77 DS-GVO).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-center justify-center">
                  <b className="w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                    6. Widerspruchsrecht
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-black">
                  <div className="self-stretch relative leading-[125%]">
                    Sie haben nach Maßgabe des Art.21 DSGVO das Recht, gegen
                    jede Verarbeitung, die auf der Rechtsgrundlage des Art.6
                    Abs.1 lit.e oder f DSGVO beruht, Widerspruch einzulegen.
                    Wir verarbeiten die personenbezogenen Daten dann nicht
                    mehr, es sei denn, wir können zwingende schutzwürdige
                    Gründe für die Verarbeitung nachweisen, die die
                    Interessen, Rechte und Freiheiten der betroffenen Person
                    überwiegen, oder die Verarbeitung dient der
                    Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen. Sofern durch uns personenbezogene Daten
                    über Sie zum Zweck der Direktwerbung, einschließlich
                    Profiling, verarbeitet werden, können Sie gegen diese
                    Verarbeitung gem. Art.21 Abs.2 und Abs.3 DSGVO Widerspruch
                    einlegen. Wir verarbeiten die personenbezogenen Daten dann
                    nicht mehr für diese Zwecke.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-center justify-center">
                  <b className="w-full max:w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                    7. Widerruf einer Einwilligung
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-black">
                  <div className="self-stretch relative leading-[125%]">
                    Sie können eine erteilte Einwilligung nach Maßgabe des
                    Art.7 Abs.3 DSGVO widerrufen. Durch einen solchen Widerruf
                    wird die Rechtmäßigkeit der Verarbeitung, die bis zum
                    Widerruf aufgrund der Einwilligung erfolgt ist, nicht
                    berührt.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-center justify-center">
                  <b className="w-full max:w-[32.375rem] relative leading-[125%] uppercase inline-block shrink-0">
                    8. Beschwerde bei einer Aufsichtsbehörde
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-black">
                  <div className="self-stretch relative leading-[125%]">
                    Wenn Sie der Ansicht sind, dass eine Verarbeitung der sie
                    betreffenden personenbezogenen Daten gegen die
                    Bestimmungen der DSGVO verstößt, haben Sie nach Maßgabe
                    des Art.77 DSGVO das Recht auf Beschwerde bei einer
                    Aufsichtsbehörde.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-[1rem] text-black">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[125%]">
                    Letzte Aktualisierung: März 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Datenschutz