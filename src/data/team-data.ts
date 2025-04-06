import { TeamDataType } from "@/interFace/interFace";
import image1 from '../../public/assets/img/team/01.png';
import image2 from '../../public/assets/img/team/02.png';
import image3 from '../../public/assets/img/team/03.png';
import image4 from '../../public/assets/img/team/04.png';
import image5 from '../../public/assets/img/team/05.png';
import image6 from '../../public/assets/img/team/06.png';

const team_data: TeamDataType[] = [
    {
        id: 1,
        image: image1,
        title: "DR. Michael Coleman",
        info: "General Practitioner",
        socialIcon: [
            { id: 1, socialLink: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
            { id: 2, socialLink: "https://twitter.com/", icon: "fab fa-twitter" },
            { id: 3, socialLink: "https://www.linkedin.com/", icon: "fab fa-linkedin" },
            { id: 4, socialLink: "https://www.youtube.com/", icon: "fab fa-youtube" },
            { id: 5, socialLink: "https://www.behance.net/", icon: "fab fa-behance" }
        ]
    },
    {
        id: 2,
        image: image2,
        title: "Alexander Knowles",
        info: "Specialist Physician",
        socialIcon: [
            { id: 1, socialLink: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
            { id: 2, socialLink: "https://twitter.com/", icon: "fab fa-twitter" },
            { id: 3, socialLink: "https://www.linkedin.com/", icon: "fab fa-linkedin" },
            { id: 4, socialLink: "https://www.youtube.com/", icon: "fab fa-youtube" },
            { id: 5, socialLink: "https://www.behance.net/", icon: "fab fa-behance" }
        ]
    },
    {
        id: 3,
        image: image3,
        title: "DR. Finley Johnson",
        info: "Surgeon",
        socialIcon: [
            { id: 1, socialLink: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
            { id: 2, socialLink: "https://twitter.com/", icon: "fab fa-twitter" },
            { id: 3, socialLink: "https://www.linkedin.com/", icon: "fab fa-linkedin" },
            { id: 4, socialLink: "https://www.youtube.com/", icon: "fab fa-youtube" },
            { id: 5, socialLink: "https://www.behance.net/", icon: "fab fa-behance" }
        ]
    },
    {
        id: 4,
        image: image4,
        title: "Dr. Alexander Bennett",
        info: "Pediatrician",
        socialIcon: [
            { id: 1, socialLink: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
            { id: 2, socialLink: "https://twitter.com/", icon: "fab fa-twitter" },
            { id: 3, socialLink: "https://www.linkedin.com/", icon: "fab fa-linkedin" },
            { id: 4, socialLink: "https://www.youtube.com/", icon: "fab fa-youtube" },
            { id: 5, socialLink: "https://www.behance.net/", icon: "fab fa-behance" }
        ]
    },
    {
        id: 5,
        image: image5,
        title: "Dr. Fiona Mitchell",
        info: "Psychiatrist",
        socialIcon: [
            { id: 1, socialLink: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
            { id: 2, socialLink: "https://twitter.com/", icon: "fab fa-twitter" },
            { id: 3, socialLink: "https://www.linkedin.com/", icon: "fab fa-linkedin" },
            { id: 4, socialLink: "https://www.youtube.com/", icon: "fab fa-youtube" },
            { id: 5, socialLink: "https://www.behance.net/", icon: "fab fa-behance" }
        ]
    },
    {
        id: 6,
        image: image6,
        title: "Dr. Benjamin Harper",
        info: "Obstetrician/Gynecologist",
        socialIcon: [
            { id: 1, socialLink: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
            { id: 2, socialLink: "https://twitter.com/", icon: "fab fa-twitter" },
            { id: 3, socialLink: "https://www.linkedin.com/", icon: "fab fa-linkedin" },
            { id: 4, socialLink: "https://www.youtube.com/", icon: "fab fa-youtube" },
            { id: 5, socialLink: "https://www.behance.net/", icon: "fab fa-behance" }
        ]
    },
]

export default team_data;