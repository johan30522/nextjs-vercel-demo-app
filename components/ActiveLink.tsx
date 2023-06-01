
import { useRouter } from 'next/router';
import Link from 'next/link';



interface Props {
    href: string;
    name: string

}
const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({ href, name }: Props) => {

    const router = useRouter();

    console.log(router.pathname);


    return (

        <Link
            href={href}
            style={(router.pathname === href) ? style : {}}
        >
            {name}
        </Link>


    )
}
