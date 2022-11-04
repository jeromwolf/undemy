import useUser from "../libs/client/useUser";

export default function Home() {
  const user = useUser();
  console.log(user);
  
  return (
    <div >
      index.js 
    </div>
  )
}
