import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlus,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlus,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faInstagram
  );
};

export default Icons;
