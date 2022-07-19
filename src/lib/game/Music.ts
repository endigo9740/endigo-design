import { randomRangeWhole } from './utils';
import { Howl } from 'howler';

export class Music {
    private static instance: Music;

    private cdnBaseUrl: string = '/music';
    private Channel: any;
    private currentIndex: number = 0;
    private tracks: any[] = [
        'chamber-strings.mp3',
        'cloud.mp3',
        'end-credits.mp3',
        'goldrush.mp3',
        'miami-vice.mp3',
        'starlight-blop.mp3',
    ];

    constructor() {
        // Set a random starting track
        this.currentIndex = randomRangeWhole(0, this.tracks.length-1);
        // Create the music channel with holwer
        this.setChannel();
    }

    public static getInstance(): Music {
        if (!Music.instance) { Music.instance = new Music(); }
        return Music.instance;
    }

    setChannel(): void {
        this.Channel = new Howl({
            src: [`${this.cdnBaseUrl}/${this.tracks[this.currentIndex]}`],
            html5: true,
            volume: 0.5,
            onend: () => { this.nextTrack(); },
            onloaderror: (id, err) => { throw new Error(`${id}: ${err}`); },
        });
    }

    playing(): boolean {
        return this.Channel.playing();
    }

    play(): void {
        this.Channel.play();
    }

    pause(): void {
        this.Channel.pause();
    }

    nextTrack(): void {
        this.Channel.stop();
        if ((this.currentIndex+1) >= this.tracks.length) { this.currentIndex = 0; } else { this.currentIndex++; }
        this.setChannel();
        this.play();
    }
}