(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(e,n,t){"use strict";t.r(n);var r=t(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"banken-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#banken-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" Banken-Interface")]),e._v(" "),t("p",[t("strong",[e._v("Transaktionen")]),e._v(", "),t("strong",[e._v("Devisentermingeschäfte")]),e._v(" und "),t("strong",[e._v("Cashbuchungen")]),e._v(" können mittels Schnittstelle ins Moneysoft übernommen werden. Dabei gibt es verschiedene Liefermöglichkeiten, entweder direkt in die Importschicht in unserem Format oder wir transformieren die gelieferten Files via Mappings in unser Format.")]),e._v(" "),t("h2",{attrs:{id:"mapping-tabellen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapping-tabellen","aria-hidden":"true"}},[e._v("#")]),e._v(" Mapping-Tabellen")]),e._v(" "),t("p",[e._v("Wenn andere Systeme die Transformation der Lieferung in unser Format übernehmen wollen, braucht es gewisse "),t("strong",[e._v("Mapping Tables")]),e._v(" als Lookup für die Lieferung der korrekten Werte in unser Format. Dafür gibt es 4 Lookup Tabellen:")]),e._v(" "),t("ul",[t("li",[e._v("Mandanten")]),e._v(" "),t("li",[e._v("Depotstellen")]),e._v(" "),t("li",[e._v("Kontokorrent-Konten")]),e._v(" "),t("li",[e._v("Titelstamm")])]),e._v(" "),t("p",[e._v("In diesen Tabellen findet man alle Stammdaten die benötigt werden, damit eine Zusweisung zu unseren "),t("strong",[e._v("Keys")]),e._v(" gemacht werden können.\nDas Programm "),t("strong",[e._v("Mapping-Tabellen schreiben")]),e._v(" ist zuständig für die Nachführung der Mappingtabellen. Diese können entweder via Batchfile in einem Scheduler regelmässig oder bei Bedarf manuell nachgeführt werden.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/ui/amibt_write_mapping.png",alt:"Write Mapping"}})]),e._v(" "),t("h2",{attrs:{id:"titel-neueroffnungen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titel-neueroffnungen","aria-hidden":"true"}},[e._v("#")]),e._v(" Titel-Neueröffnungen")]),e._v(" "),t("p",[e._v("Es besteht die Möglichkeit fehlende Titel in der "),t("strong",[e._v("Titelstamm")]),e._v(" Mapping Tabelle als zu eröffnende Titel zu melden.")]),e._v(" "),t("p",[e._v("Wenn neue Titel eröffnet werden müssen, können diese mit dem Programm "),t("strong",[e._v("Titel-Neueröffnungen ausführen")]),e._v(" aufgerufen werden. Ist die "),t("strong",[e._v("apiD-Schnittstelle")]),e._v(" zur SIX aktiv, lassen sich diese mit einem Klick via SIX eröffnen, ansonsten wird der Header gem. den gelieferten Infos geschrieben und die restlichen Informationen müssen noch ergänzt werden.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/ui/amibt_opening_assets.png",alt:"Execute Asset Openings"}})]),e._v(" "),t("p",[e._v("Der Titel wird automatisch auf den Status "),t("strong",[e._v("Eröffnet")]),e._v(" gesetzt und entsprechend eingefärbt, sobald dieser eröffnet wurde und verschwindet beim nächsten Programmstart von der Lupe.")]),e._v(" "),t("h3",{attrs:{id:"titel-bereits-vorhanden"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titel-bereits-vorhanden","aria-hidden":"true"}},[e._v("#")]),e._v(" Titel bereits vorhanden")]),e._v(" "),t("p",[e._v("Ist der gemeldete Titel bereits im Titelstamm vorhanden, erscheint die Meldung, dass der Titel bereits existiert und einige Angaben mit dem vorhandenen Titel verglichen werden. Sind Angaben abweichend wird dies ebenfalls in einer Dialog-Box gemeldet.")]),e._v(" "),t("img",{attrs:{src:"/images/ui/amibt_execute_asset.png",width:"200",alt:"Execute Asset"}}),e._v(" "),t("p",[e._v("Abschliessend wird in einer Dialog-Box gefragt, ob der Status des zu eröffnenden Titels auf "),t("strong",[e._v("Eröffnet")]),e._v(" gesetzt werden soll.")]),e._v(" "),t("img",{attrs:{src:"/images/ui/amibt_change_state.png",width:"350",alt:"Change State"}}),e._v(" "),t("h2",{attrs:{id:"daten-importieren"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#daten-importieren","aria-hidden":"true"}},[e._v("#")]),e._v(" Daten importieren")]),e._v(" "),t("p",[e._v("Sobald die Transaktionen transformiert und bereit zum Import stehen, können diese mit\ndem Programm "),t("strong",[e._v("Daten importieren")]),e._v(" importiert werden.")]),e._v(" "),t("p",[e._v("Unter "),t("strong",[e._v("Selektionen")]),e._v(" lassen sich verschiedene Selektionen durchführen um nur einzelne Trades oder Buchungen zu importieren, z.B. von einzelnenen oder mehreren Clients, Konten oder Depots oder das Eingrenzen des Datums.")]),e._v(" "),t("p",[e._v("Mit dem Button "),t("strong",[e._v("Lupe Import-Records")]),e._v(" lassen sich die zu importierende Records zeigen oder ausblenden. Die Anzeige der Records wird dynamisch anhand der Selektion gefiltert.")]),e._v(" "),t("p",[e._v("Mittels dem Button "),t("strong",[e._v("Unvollständige sichtbar")]),e._v(" können Transaktionen angezeigt werden, die noch nicht vollständig mit den nötigen Informationen ausgestattet sind. Diese Records können nicht importiert werden und dienen lediglich der Vorinformation.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/ui/amibt_import_data.png",alt:"Import Data"}})]),e._v(" "),t("p",[e._v("Mit bestätigen des "),t("strong",[e._v("OK")]),e._v(" Buttons beginnt die Verarbeitung. Während der Verarbeitung werden die Daten nochmals auf Vollständigkeit geprüft und validiert.")]),e._v(" "),t("h3",{attrs:{id:"optionen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optionen","aria-hidden":"true"}},[e._v("#")]),e._v(" Optionen")]),e._v(" "),t("p",[e._v("Unter Optionen lässt sich zusätzlich selektieren welche Daten importiert werden sollen. Folgende Auswahl steht zur Verfügung:")]),e._v(" "),t("ul",[t("li",[e._v("Transaktionen")]),e._v(" "),t("li",[e._v("Cash-Buchungen")]),e._v(" "),t("li",[e._v("Devisentermingeschäfte")]),e._v(" "),t("li",[e._v("Corporate Actions")])]),e._v(" "),t("h3",{attrs:{id:"fehlerhandling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fehlerhandling","aria-hidden":"true"}},[e._v("#")]),e._v(" Fehlerhandling")]),e._v(" "),t("p",[e._v("Werden Fehler während der Verarbeitung festgestellt, werden diese in einem umfangreichen Debug-Protokoll mit Debug-Outputs und zusätzlich einem leserfreundlicheren Quick-Protokoll mit den wichtigsten Infos geschrieben.")]),e._v(" "),t("p",[e._v("Das Quick-Protkoll wird direkt nach dem Import geöffnet, wenn die Option "),t("strong",[e._v("Protokollfile anzeigen?")]),e._v(" gesetzt ist.")]),e._v(" "),t("p",[e._v("Fehlerhafte Records können anschliessend analysiert und die Parameter neu eingestellt und danach den Status von "),t("strong",[e._v("Fehler")]),e._v(" auf "),t("strong",[e._v("Bereit zum Import")]),e._v(" direkt in der Übersicht zurückgestellt werden. Ebenfalls lässt sich der Status auf "),t("strong",[e._v("Manuell erledigt")]),e._v(" stellen, falls es sich um einen Ausnahmefehler hält und keine Parametrierung notwendig ist. Beim Ändern des Status kann ein Kommentar hinzugefügt werden.")]),e._v(" "),t("p",[e._v("Auszug aus dem Debug Protokoll mit wichtigen Infos für die Nachvollziehbarkeit des Imports:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Import Data: TRX, CE, FXF\nErmitteln Beginn....: 23.11.2018, 10:07:32.8\nErmitteln Ende......: 23.11.2018, 10:07:32.8\nDauer Ermitteln.....: 0.0 sec   [0:00.0]\n1 Import records ermittelt\nKeyfile: P:\\Path\\Log\\BIDI_2018_11_23_10_07_32_Keys_Imp.txt\nIns Gesamt-Keyfile übernehmen\nVerarbeitung: Execute Import (1 Import records)\nVerarbeitung Beginn.: 23.11.2018, 10:07:32.9\n[0,Xtrx,      1'214] 218;NO0010734999;000;UBSTA;04.05.2016;00:00:00;70  [1]\n- L: Client 218: BC=EUR, NC=CHF, Dom=CY, CGr=0 / FA: Client=218, NC=EUR\n- D: TA-W NOK / Kot 100\n- D: Settlement: EUR, 1'602.81, leer / BHW / Kurs = 1\n- D: Unit: NOK, 1'500'000, 100 / Kot 100 / Dev.kurs NOK/EUR 10.7072169501286 / Kurs = 10.7072169501286\n- New voucher number: 375 (Valor)\n- L: Record created: 'Jour.218' Key \" 407\"\n- L: Calling Pre-Entries for FA: 'Jour.218' Key \" 407\" (Trx) - L: Record updated: 'Xtrx' Key \" 1'214\"\nVerarbeitung Ende...: 23.11.2018, 10:07:33.9\nDauer Verarbeitung..: 1.0 sec [0:01.0]\nVerarbeitung ok\n")])])]),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Wichtig")]),e._v(" "),t("p",[e._v("Die Records können mit einer Audit-Trail-ID versehen werden, damit die ganze Kette von der Einlieferung der Records bis zur verbuchten Transaktion lückenlos nachvollziehbar bleibt.")])]),e._v(" "),t("h2",{attrs:{id:"verbuchung"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verbuchung","aria-hidden":"true"}},[e._v("#")]),e._v(" Verbuchung")]),e._v(" "),t("p",[e._v("Die Importierten Records werden alle ins Journal gestellt wo sie noch definitiv verbucht werden müssen. Beim Verbuchen werden wieder verschiedene Validierungen gemacht um sicher zu stellen, dass alles korrekt verarbeitet wird.")]),e._v(" "),t("p",[e._v("Solange ein Record im Journal steht, können diese noch manuell bearbeitet werden.")]),e._v(" "),t("h2",{attrs:{id:"positionsabstimmung"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positionsabstimmung","aria-hidden":"true"}},[e._v("#")]),e._v(" Positionsabstimmung")]),e._v(" "),t("p",[e._v("Mit dem Programm "),t("strong",[e._v("Positionsabstimmung anzeigen/schreiben")]),e._v(" werden die Daten von Moneysoft mit den gelieferten Daten der Gegenpartei verglichen. Dazu können von der Gegenpartei die Daten direkt in die Tabelle in unserem Format geschrieben werden oder via File geliefert werden, welches bei uns transformiert wird.")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Wichtig")]),e._v(" "),t("p",[e._v("In der Übersicht wird einerseits die Menge, der Ratazins und der Marktwert verglichen. Die Menge muss zu 100% übereinstimmen, ansonsten generiert es einen Fehler.")])]),e._v(" "),t("p",[e._v("Für die anderen zwei Abweichungen können pro Titelart die prozentualen Grenzen für den Status grün, orange und rot im Parameter-Dokument "),t("strong",[e._v("Abt/AbwTitelart")]),e._v(" im File D000Vrdk.DAT hinterlegt werden.")]),e._v(" "),t("img",{attrs:{src:"/images/ui/amibt_recon_param.png",width:"500",alt:"Reconciliation Param"}}),e._v(" "),t("p",[e._v("Die berechneten Vergleiche werden Revisionssicher in einer Tabelle gespeichert und lassen sich jederzeit wieder aufrufen.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/ui/amibt_recon_ms.png",alt:"Reconciliation MS"}})]),e._v(" "),t("p",[e._v("Die Anzeige lässt sich über den Standardmenupunkt "),t("strong",[e._v("Lupe – Exportieren")]),e._v(" leicht ins Excel exportieren, dabei wird die Formatierung beibehalten.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/ui/amibt_recon_xls.png",alt:"Reconciliation Excel"}})]),e._v(" "),t("h2",{attrs:{id:"regeln-steuerbetrage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regeln-steuerbetrage","aria-hidden":"true"}},[e._v("#")]),e._v(" Regeln Steuerbeträge")]),e._v(" "),t("p",[e._v("Mit dem Programm "),t("strong",[e._v("Regeln Steuerbeträge verwalten")]),e._v(" können Regeln zur Berechnungsgrundlage bestimmt werden.")]),e._v(" "),t("p",[e._v("Die Regel kann sowohl auf Mandant-Ebene oder global ohne Mandant definiert werden.")]),e._v(" "),t("p",[e._v("Mit der "),t("strong",[e._v("Reihenfolge-Nummer")]),e._v(" kann die Reihenfolge manuell bestimmt werden, wie die Regeln abgearbeitet werden. Die Mandant-Spezifischen greifen immer vor den Globalen.")]),e._v(" "),t("p",[e._v("Bei folgenden Felder können einzelne Werte kommagetrennt (auch mit Wildcards), wie auch Bereiche hinterlegt werden:")]),e._v(" "),t("ul",[t("li",[e._v("Domizile Mandant")]),e._v(" "),t("li",[e._v("Domizile Titel")]),e._v(" "),t("li",[e._v("Nationalitäten Titel")]),e._v(" "),t("li",[e._v("Titelarten")]),e._v(" "),t("li",[e._v("Valorennummer (ISIN)")]),e._v(" "),t("li",[e._v("Depostellen")])]),e._v(" "),t("p",[e._v("Unter "),t("strong",[e._v("Berechnung")]),e._v(" kann gewählt werden ob es die Regel von Moneysoft anwenden soll, oder das übernimmt wie die Bank es liefert. Wenn keine Regel definiert wurde, ist Standard wie die Bank es liefert. Hier kann aber mit der Reihenfolge noch eine explizite Regel vorgeschoben werden, wenn ein spezifisches Depot doch von der Bank kommen soll z.B. und alle anderen nach Moneysoft.")]),e._v(" "),t("p",[e._v("Unter "),t("strong",[e._v("Gültig ab")]),e._v(" kann bestimmt werden, für welche Trade-Dates die Regel gültig ist.")]),e._v(" "),t("p",[e._v("Unter "),t("strong",[e._v("Absolute Toleranz (Betrag)")]),e._v(" und "),t("strong",[e._v("Relative Toleranz (Prozent)")]),e._v(" kann die gültige Abweichung definiert werden.")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Info")]),e._v(" "),t("p",[e._v("Die Rückforderungssätze können unter "),t("strong",[e._v("Valor - Mandanten - Rückforderungssätze verwalten")]),e._v(" eingestellt werden.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/ui/amibt_manage_tax_rules.png",alt:"Manage Tax Rules"}})]),e._v(" "),t("h2",{attrs:{id:"weitere-parametrierungen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weitere-parametrierungen","aria-hidden":"true"}},[e._v("#")]),e._v(" Weitere Parametrierungen")]),e._v(" "),t("h3",{attrs:{id:"kontokorrent-konten"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kontokorrent-konten","aria-hidden":"true"}},[e._v("#")]),e._v(" Kontokorrent Konten")]),e._v(" "),t("p",[e._v("Im Programm "),t("strong",[e._v("Valor - Stammdaten - Kontokorrent-Konten verwalten")]),e._v(" müssen die Bank-Kontonummer und die Kontonummer vom Final erfasst werden. Diese werden für das Mapping der angelieferten Files benötigt.")]),e._v(" "),t("img",{attrs:{src:"/images/ui/amibt_manage_current_accounts.png",width:"450",alt:"Manage Current Accounts"}}),e._v(" "),t("h3",{attrs:{id:"parameter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameter")]),e._v(" "),t("p",[e._v("Im Dokument "),t("strong",[e._v("Bip/BankIntParam")]),e._v(" im File D000Vrdk.DAT können Grundeinstellungen vorgenommen werden wie:")]),e._v(" "),t("ul",[t("li",[e._v("Verzeichnis Reports")]),e._v(" "),t("li",[e._v("CB: Durchlauf-Konten")]),e._v(" "),t("li",[e._v("Einstellungen für DTGs")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/ui/amibt_param.png",alt:"Param"}})])])}],!1,null,null,null);n.default=i.exports}}]);