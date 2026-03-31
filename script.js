document.addEventListener('DOMContentLoaded', () => {
    const translate = document.getElementById('translate');
    if (!translate) return;
    translate.addEventListener('click', () => {
        const jobTitle = document.getElementById('job-title');
        if (!jobTitle) return;
        if (translate.textContent === 'de') {
            jobTitle.textContent = 'Web Developer';
            translate.textContent = 'en';
        } else {
            jobTitle.textContent = 'Web-Entwickler';
            translate.textContent = 'de';
        }
        const titleMe = document.getElementById('title-me');
        if (!titleMe) return;
        if (translate.textContent === 'de') {
            titleMe.textContent = 'Über mich';
        } else {
            titleMe.textContent = 'About Me';
        }
        const aboutMeOne = document.getElementById('about-me-one');
        if (!aboutMeOne) return;
        if (translate.textContent === 'de') {
            aboutMeOne.textContent = 'Mein Name ist Tymur Turchak. Ich bin ein angehender Webentwickler und wurde im Jahr 2008 geboren. Derzeit lerne ich Programmierung selbstständig und habe Grundkenntnisse in HTML, CSS und JavaScript.';
        }else {
            aboutMeOne.textContent = 'My name is Tymur Turchak. I am a beginner web developer born in 2008. Currently I am learning programming independently and have basic knowledge of HTML, CSS and JavaScript.';
        }
        const aboutMeTwo = document.getElementById('about-me-two');
        if (!aboutMeTwo) return;
        if (translate.textContent === 'de') {
            aboutMeTwo.textContent = 'Ich habe die Sekundarschule (11 Klassen) in der Ukraine abgeschlossen und lebe derzeit in Deutschland. Mein Ziel ist es, eine Ausbildung im Bereich Webentwicklung zu finden.';
        } else {
            aboutMeTwo.textContent = 'I graduated from secondary school (11 grades) in Ukraine and currently live in Germany. My goal is to find an Ausbildung in the field of web development.';
        }
        const aboutMeThree = document.getElementById('about-me-three');
        if (!aboutMeThree) return;
        if (translate.textContent === 'de') {
            aboutMeThree.textContent = 'Ich genieße es, mit modernen Technologien zu arbeiten und meine Fähigkeiten kontinuierlich zu verbessern. Ich versuche immer, mich zu entwickeln und besser zu werden als ich gestern war.';
        } else {
            aboutMeThree.textContent = 'I enjoy working with modern technologies and continuously improving my skills. I always try to develop myself and become better than I was yesterday.';
        }
        const aboutMeFour = document.getElementById('about-me-four');
        if (!aboutMeFour) return;
        if (translate.textContent === 'de') {
            aboutMeFour.textContent = 'Neben der Programmierung praktiziere ich Kickboxen auf professionellem Niveau. Mein Interesse an Programmierung begann mit Computerspielen und entwickelte sich später durch Gespräche mit meinen Tanten Freunden, die in der IT-Branche arbeiten.';
        } else {
            aboutMeFour.textContent = 'In addition to programming, I practice kickboxing at a professional level. My interest in programming started with computer games and later developed through conversations with my aunt’s friends who work in the IT industry.';
        }
        const titleHardSkills = document.getElementById('title-hard-skills');
        if (!titleHardSkills) return;
        if (translate.textContent === 'de') {
            titleHardSkills.textContent = 'Fachliche Fähigkeiten';
        } else {
            titleHardSkills.textContent = 'Hard Skills';
        }
const htmlSkill = document.querySelector('li[data-key="html"]');
        const cssSkill = document.querySelector('li[data-key="css"]');
        const jsSkill = document.querySelector('li[data-key="js"]');
        if (!htmlSkill || !cssSkill || !jsSkill) return;
        if (translate.textContent === 'de') {
            htmlSkill.textContent = 'HTML-Grundkenntnisse';
            cssSkill.textContent = 'CSS-Grundkenntnisse';
            jsSkill.textContent = 'JavaScript-Grundkenntnisse';
        } else {
            htmlSkill.textContent = 'HTML-basic knowledge';
            cssSkill.textContent = 'CSS-basic knowledge';
            jsSkill.textContent = 'JavaScript-basic knowledge';
        }
        const titleSoftSkills = document.getElementById('title-soft-skills');
        if (!titleSoftSkills) return;
        if (translate.textContent === 'de') {
            titleSoftSkills.textContent = 'Soziale Kompetenzen';
        } else {
            titleSoftSkills.textContent = 'Soft Skills';
        }
        const softSkills = document.querySelectorAll('li[data-key="soft"]');
        if (!softSkills) return;
        if (translate.textContent === 'de') {
            softSkills[0].textContent = 'Disziplin – entwickelt durch viele Jahre professionelle Kickboxen-Training.';
            softSkills[1].textContent = 'Zielorientierte Denkweise – meine Erfolge in der Sport haben mir gezeigt, wie man klare Ziele setzt und konsequent daran arbeitet.';
            softSkills[2].textContent = 'Neugier und Bereitschaft zum Lernen – Ich genieße es, neue Technologien zu erkunden und mein Wissen kontinuierlich zu erweitern.';
            softSkills[3].textContent = 'Geduld – Ich verstehe, dass das Erlernen komplexer Fähigkeiten Zeit und Durchhaltevermögen erfordert.';
            softSkills[4].textContent = 'Hartnäckig und engagiert – Ich versuche immer, konsistente Anstrengungen zu unternehmen und meine Fähigkeiten zu verbessern.';
            softSkills[5].textContent = 'Selbstmotivation – Da ich Programmierung unabhängig lerne, habe ich die Fähigkeit entwickelt, motiviert zu bleiben und meinen eigenen Lernprozess zu managen.';
            softSkills[6].textContent = 'Problemlösungsorientiertes Denken – Ich genieße es, Probleme zu analysieren und logische Lösungen zu finden, insbesondere wenn ich mit Code arbeite.';
            softSkills[7].textContent = 'Verantwortungsbewusstsein – Ich nehme meine Verpflichtungen ernst und versuche immer, Aufgaben zuverlässig abzuschließen.';
        } else {
            softSkills[0].textContent = 'Discipline – developed through many years of professional kickboxing training.';
            softSkills[1].textContent = 'Goal-oriented mindset – my achievements in sports have taught me how to set clear goals and consistently work toward them.';
            softSkills[2].textContent = 'Curiosity and willingness to learn – I enjoy exploring new technologies and continuously expanding my knowledge.';
            softSkills[3].textContent = 'Patience – I understand that learning complex skills takes time and persistence.';
            softSkills[4].textContent = 'Hardworking and dedicated – I always try to put in consistent effort and improve my abilities.';
            softSkills[5].textContent = 'Self-motivation – since I am learning programming independently, I have developed the ability to stay motivated and manage my own learning process.';
            softSkills[6].textContent = 'Problem-solving mindset – I enjoy analyzing problems and finding logical solutions, especially when working with code.';
            softSkills[7].textContent = 'Responsibility – I take my commitments seriously and always try to complete tasks reliably.';
        }
        const titleEducation = document.getElementById('title-education');
        if (!titleEducation) return;
        if (translate.textContent === 'de') {
            titleEducation.textContent = 'Bildung';
        } else {
            titleEducation.textContent = 'Education';
        }
        const education = document.getElementById('education');
        if (!education) return;
        if (translate.textContent === 'de') {
            education.textContent = 'Sekundarschule (11 Klassen) in der Ukraine';
        } else {
            education.textContent = 'Secondary school (11 grades) in Ukraine';
        }
        const titleLanguages = document.getElementById('title-languages');
        if (!titleLanguages) return;
        if (translate.textContent === 'de') {
            titleLanguages.textContent = 'Sprachen';
        } else {
            titleLanguages.textContent = 'Languages';
        }
        const languageItems = document.querySelectorAll('li[data-key="language"]');
        if (!languageItems) return;
        if (translate.textContent === 'de') {
            languageItems[0].textContent = 'Ukrainisch – Muttersprache';
            languageItems[1].textContent = 'Russisch – fließend';
            languageItems[2].textContent = 'Englisch – Mittelstufe (B1)';
            languageItems[3].textContent = 'Deutsch – B1 (derzeit in Vorbereitung auf B2)';
        } else {
            languageItems[0].textContent = 'Ukrainian – native language';
            languageItems[1].textContent = 'Russian – fluent';
            languageItems[2].textContent = 'English – intermediate (B1)';
            languageItems[3].textContent = 'German – B1 (currently studying for B2)';
        }
        const titleJavascriptSkills = document.getElementById('title-javascript-skills');
        if (!titleJavascriptSkills) return;
        if (translate.textContent === 'de') {
            titleJavascriptSkills.textContent = 'Zwei Arten von Sortierung als Beispiel meiner JavaScript-Fähigkeiten';
        } else {
            titleJavascriptSkills.textContent = 'Two types of sorting as an example of my JavaScript skills';
        }
        const button1 = document.getElementById('button1');
        const button2 = document.getElementById('button2');
        const sortButton1 = document.getElementById('sortButton1');
        const sortButton2 = document.getElementById('sortButton2');
        if (!button1 || !button2 || !sortButton1 || !sortButton2) return;
        if (translate.textContent === 'de') {
            button1.textContent = 'Array generieren';
            sortButton1.textContent = 'Sortieren';
            button2.textContent = 'Array generieren';
            sortButton2.textContent = 'Sortieren';
        } else {
            button1.textContent = 'Random array';
            sortButton1.textContent = 'Sort';
            button2.textContent = 'Random array';
            sortButton2.textContent = 'Sort';
        }
const titleContact = document.getElementById('title-contact');
        if (!titleContact) return;
        if (translate.textContent === 'de') {
            titleContact.textContent = 'Kontaktinformationen';
        } else {titleContact.textContent = 'Contact Information';
        }

    })
});