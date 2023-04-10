import { ZoneType } from "../types/zoneType";
import { ZoneGenre } from "../types/zoneGenre";

interface CandidateInterface {
    id: number;
    fullName: string;
    photo?: string;
    
    profileRating?: number;
    conserveData?: boolean
    specialization: Array<string>

    currentZoneType: ZoneType;
    currentZoneGenre: ZoneGenre;
}

export default CandidateInterface