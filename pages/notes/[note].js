import { useRouter } from 'next/router';


export default function Note() {
  const router = useRouter();
  return <h1>this is a {router.query.note}</h1>
}