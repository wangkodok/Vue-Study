// OOP 객체지향 프로그래밍
// 멀티패러다임
// 함수형 코드, 객체지향 코드 둘다 사용 가능
function Song(singer, title, release) {
    // 연결해주는 작업
    this.singer = singer;
    this.title = title;
    this.release = new Date(release);
    this.getReleaseDay = function() {
        return this.release.getDay();
    }
    this.getInfo = function() {
        return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title} 입니다.`;
    }
    // console.log(this);
}
Song.prototype.getInfo = function() {
    return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title} 입니다.`;
}
// new 없으면 window 가리키다
// new 키워드를 통해 객체를 인스턴스화
const song1 = new Song("bts", "dna", "2022-06-24");
const song2 = new Song("eminem", "love", "2022-09-12");
// console.log(song1, song2);
// console.log(song1.release.getDay());
// console.log(song1.getReleaseDay());
// console.log(song1.getInfo());
// console.log(song2.getInfo());

// class
class isSong {
    constructor(singer, title, release) {
        this.singer = singer;
        this.title = title;
        this.release = new Date(release);
    }
    getReleaseDay() {
        return this.release.getDay();
    }
}
// syntactic sugar
// console.log(song1, song2);