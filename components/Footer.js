import styles from "./Footer.module.css";
import Moment from "react-moment";
import moment from "moment";
export default function Footer() {
  return (
    <>
      <footer className="font-Rubik text-xs text-zinc-900">
        © {moment().year()} Randolph Pereira.
      </footer>
    </>
  );
}
