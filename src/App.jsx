import PortalModal from "./lib/components/Modal";

export default function App() {
  const modalContent = "ceci est le contenu de la modale";

  return <PortalModal modalContent={modalContent}></PortalModal>;
}
