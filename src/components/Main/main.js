import React from 'react';
// import { Home, About, Contact } from './';
import {Home} from  "../Home/home"
import {About} from  "../About/about"
import {Contact} from  "../Contacts/contacts"
import {Projects} from  "../Projects/projects"


export const Main = () => (
	<main>
		<Home />
		<About />
		<Projects />
		<Contact />
	</main>
);

