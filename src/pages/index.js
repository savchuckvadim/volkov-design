import { useEffect } from "react";
import Demos from "./demos";
import Home6 from "./home";
import { uploadImage } from "src/services/firebase-api/firebase-store-api";
// import testImg from '../../public/assets/img/works/curs/1.jpg';


export default function Home({id}) {
  // return <Demos />;
  // useEffect(() => {
  //   const funct = async () => {
  //     const result = await uploadImage()
  //     console.log(result)
  //     debugger
  //   }

  //   funct()
  // }, [id])
  return <Home6 />;
}
