import { ZoneType, zoneTypes } from "../types/zoneType";
import CandidateInterface from "../interfaces/CandidateInterface";
import { zoneGenres } from "../types/zoneGenre";
const candidates: CandidateInterface[] = [
    {
        id: 1,
        fullName: "Anas El boudali",
        photo: 'anaselboudali.jpeg',
        specialization: [],
        currentZoneType: zoneTypes.INITIAL_ZONE,
        currentZoneGenre: zoneGenres.SOURCE
    },
    {
        id: 2,
        fullName: "Isaac Smiljana",
        photo: 'man2.jpg',
        specialization: [],
        currentZoneType: zoneTypes.INITIAL_ZONE,
        currentZoneGenre: zoneGenres.SOURCE
    },
    {
        id: 3,
        fullName: "Angela Haya",
        specialization: [],
        currentZoneType: zoneTypes.INITIAL_ZONE,
        currentZoneGenre: zoneGenres.SOURCE
    },
    {
        id: 4,
        fullName: "Desideria Edina",
        specialization: [],
        currentZoneType: zoneTypes.INITIAL_ZONE,
        currentZoneGenre: zoneGenres.SOURCE
    },
    {
        id: 5,
        fullName: "Simisola Nila",
        photo: 'woman5.jpg',
        specialization: [],
        currentZoneType: zoneTypes.INITIAL_ZONE,
        currentZoneGenre: zoneGenres.SOURCE
    },
    {
        id: 6,
        fullName: "Traudl Miluše",
        photo: 'man6.jpg',
        specialization: [],
        currentZoneType: zoneTypes.INITIAL_ZONE,
        currentZoneGenre: zoneGenres.SOURCE
    },
    {
        id: 7,
        fullName: "Jackalyn Irmhild",
        photo: 'man7.jpg',
        specialization: [],
        currentZoneType: zoneTypes.INITIAL_ZONE,
        currentZoneGenre: zoneGenres.SOURCE
    }
]

export default candidates