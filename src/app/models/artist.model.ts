import { Link } from "./link.model";
import { Thumbnail } from "./thumbnail.model";

export class Artist {
    public createdon: Date;
    public lastused: Date;
    public artistname: string;
    public artisttag: string;
    public artistimg: string;
    public artistbio: string;
    public artistry: string[];
    public importantlinks: Link[];
    public library: Thumbnail[];
}