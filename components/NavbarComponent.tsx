
import Link from 'next/link';


import styles from './NavbarComponent.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavbarComponent = () => {
    return (
        <nav
            className={styles['menu-container']}
        >

            {/* <ActiveLink href="/" name="Home" />
            <ActiveLink href="/about" name="About" />
            <ActiveLink href="/contact" name="Contact" />
            <ActiveLink href="/pricing" name="Pricing" /> */}

            {
                menuItems.map((item, index) => (
                    <ActiveLink
                        key={index}
                        href={item.href}
                        name={item.text}
                    />
                ))
            }

        </nav>
    )
}
