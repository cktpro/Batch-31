import React,{memo,useCallback,useEffect,useState} from 'react';
import './playList.css';
import MusicPlay from './musicPlay';

const allList=[
    {
        id:1,
        name:"Bông Hoa Đẹo Nhất",
        cover:"https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/f/8/1/e/f81efd92fa9a3d52eb37f3b867ab9d32.jpg",
        src:require('../../assets/audio/BongHoaDepNhat-QuanAP-6607955.mp3'),
        artist:"Quân AP",
        isLiked:false
    },
    {
        id:2,
        name:"Có Thể Được Không",
        cover:"https://avatar-ex-swe.nixcdn.com/song/2019/06/10/3/5/a/4/1560155881037_640.jpg",
        src:require('../../assets/audio/CoTheDuocKhong-TruongYHaoZhangZiHao-5599170.mp3'),
        artist:"Trương Y Hạo",
        isLiked:false
    },
    {
        id:3,
        name:"Gene",
        cover:"https://img.saostar.vn/2019/05/13/5177543/batch_geneartwork.jpg",
        src:require('../../assets/audio/Gene.mp3'),
        artist:"Binz",
        isLiked:true
    },{
        id:4,
        name:"Hãy Trao Cho Anh",
        cover:"https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/7/1/741911/Hay-Trao-Cho-Anh.jpg",
        src:require('../../assets/audio/HayTraoChoAnh-SonTungMTPSnoopDogg-6010660.mp3'),
        artist:"Sơn Tùng MTP",
        isLiked:true
    },{
        id:5,
        name:"Kẻ Cắp Gặp Bà Già",
        cover:"https://nld.mediacdn.vn/2020/4/5/dwmhi3gi-1586048315907697508551.jpeg",
        src:require('../../assets/audio/KeCapGapBaGiaQuavuRemix-HoangThuyLinhBinz-6249399.mp3'),
        artist:"Hoàng Thùy Linh",
        isLiked:false
    }
]

function PlayList(props) {
    const [selectedMusic,setSelectedMusic]=useState(allList[0])
    const [playList,setPlayList]=useState()

    useEffect(()=>{
        setPlayList(allList.filter((m)=> m.id !==selectedMusic.id))
    },[selectedMusic.id])

    const onHandleSelectedMusic = useCallback((id) => () => {
        const selected = playList.find((m) => m.id === id);
    
        setSelectedMusic(selected);
      }, [playList]);
    
    return (
        <div className="music-space">
      <div className="music-list">
        <div className="list-title text-strong">Most Popular</div>

        <div className="list-sub">{allList.length} songs</div>

        <div className="play-list">
          {
            playList?.length > 0 ? playList.map((m) => (
              <div className="play-item" key={m.name}>
              <button className="play-block" onClick={onHandleSelectedMusic(m.id)}>
                <span className="index text-strong">{m.id}</span>
  
                <img
                  src={m.cover}
                  alt="My Stress"
                  className="thumbnail"
                />

                {
                  selectedMusic?.id === m.id
                    ? <i className="fa-solid fa-volume-high play-icon"></i>
                    : <i className="fa-solid fa-play play-icon"></i>
                }

                <span className="music-name text-strong" >{m.name}</span>
              </button>
  
              <span className="play-author">{m.artist}</span>
  
              <span className="timer">3:22</span>
  
              <i className={` ${m.isLiked ? 'fa-solid fa-heart ' : 'fa-regular fa-heart'}`}></i>
            </div>
            )) : <p>Không có bài hát trong danh sách</p>
          }
        </div>
      </div>

      <div className="music-playing">
        <MusicPlay
          name={selectedMusic.name}
          artist={selectedMusic.artist}
          cover={selectedMusic.cover}
          id={selectedMusic.id}
          src={selectedMusic.src}
        />
      </div>
    </div>
    );
}

export default memo(PlayList);