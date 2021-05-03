import { useState } from "react"

export function CardInner(props) {
    return (
        <div className={`flip-card-inner bg-white rounded-xl shadow-xl`}>
            <div className={`${props.side === 'front' ? 'flip-card-front' : 'flip-card-back'}`}>
                <div className="mr-3 pt-3 cursor-pointer flex justify-end"
                onClick={() => props.setAddtoMyList(!props.addtoMyList)}
                >
                    { props.addtoMyList ?
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#9CBACE"/>
                        <path d="M11.4286 12.5714C11.4286 11.6621 11.7898 10.79 12.4328 10.1471C13.0758 9.50408 13.9478 9.14285 14.8572 9.14285H26.2857C27.195 9.14285 28.0671 9.50408 28.7101 10.1471C29.3531 10.79 29.7143 11.6621 29.7143 12.5714V29.872C29.7144 30.1723 29.6356 30.4674 29.4858 30.7276C29.3361 30.9879 29.1205 31.2043 28.8608 31.3551C28.6011 31.5059 28.3064 31.5858 28.0061 31.5869C27.7058 31.5879 27.4105 31.5101 27.1497 31.3611L21.1383 27.9257C20.9657 27.8271 20.7703 27.7752 20.5714 27.7752C20.3726 27.7752 20.1772 27.8271 20.0046 27.9257L13.9932 31.3611C13.7324 31.5101 13.4371 31.5879 13.1368 31.5869C12.8365 31.5858 12.5417 31.5059 12.2821 31.3551C12.0224 31.2043 11.8068 30.9879 11.6571 30.7276C11.5073 30.4674 11.4285 30.1723 11.4286 29.872V12.5714ZM14.8572 11.4286C14.5541 11.4286 14.2634 11.549 14.049 11.7633C13.8347 11.9776 13.7143 12.2683 13.7143 12.5714V28.888L18.8709 25.9417C19.3888 25.6459 19.975 25.4902 20.5714 25.4902C21.1679 25.4902 21.7541 25.6459 22.272 25.9417L27.4286 28.888V12.5714C27.4286 12.2683 27.3082 11.9776 27.0939 11.7633C26.8795 11.549 26.5888 11.4286 26.2857 11.4286H14.8572Z" fill="#FFDB7B"/>
                        <path d="M26.5714 10H14.4286C13.7845 10 13.1668 10.2341 12.7113 10.6509C12.2559 11.0676 12 11.6329 12 12.2222V30L20.5 26.6667L29 30V12.2222C29 11.6329 28.7441 11.0676 28.2887 10.6509C27.8332 10.2341 27.2155 10 26.5714 10Z" fill="#FFDB7B"/>
                        </svg>                    
                        :
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#9CBACE" />
                            <path d="M11.4286 12.5714C11.4286 11.6621 11.7898 10.79 12.4328 10.1471C13.0758 9.50408 13.9478 9.14285 14.8572 9.14285H26.2857C27.195 9.14285 28.0671 9.50408 28.7101 10.1471C29.3531 10.79 29.7143 11.6621 29.7143 12.5714V29.872C29.7144 30.1723 29.6356 30.4674 29.4858 30.7276C29.3361 30.9879 29.1205 31.2043 28.8608 31.3551C28.6011 31.5059 28.3064 31.5858 28.0061 31.5869C27.7058 31.5879 27.4105 31.5101 27.1497 31.3611L21.1383 27.9257C20.9657 27.8271 20.7703 27.7752 20.5714 27.7752C20.3726 27.7752 20.1772 27.8271 20.0046 27.9257L13.9932 31.3611C13.7324 31.5101 13.4371 31.5879 13.1368 31.5869C12.8365 31.5858 12.5417 31.5059 12.2821 31.3551C12.0224 31.2043 11.8068 30.9879 11.6571 30.7276C11.5073 30.4674 11.4285 30.1723 11.4286 29.872V12.5714ZM14.8572 11.4286C14.5541 11.4286 14.2634 11.549 14.049 11.7633C13.8347 11.9776 13.7143 12.2683 13.7143 12.5714V28.888L18.8709 25.9417C19.3888 25.6459 19.975 25.4902 20.5714 25.4902C21.1679 25.4902 21.7541 25.6459 22.272 25.9417L27.4286 28.888V12.5714C27.4286 12.2683 27.3082 11.9776 27.0939 11.7633C26.8795 11.549 26.5888 11.4286 26.2857 11.4286H14.8572Z" fill="white" />
                        </svg>
                    }
                </div>
                <div className="px-2 -mt-3 h-5/6 flex justify-center items-center"
                    onClick={() => props.setTranslate(!props.translate)}
                >
                <p className="text-card">{props.word}</p>
                </div>
            </div>
        </div>
    )
}




export default function Card(props) {
    const [addtoMyList, setAddtoMyList] = useState(false)
    return (
        <div className={`${props.translate ? 'flip-card' : ''} h-80 w-54 sm:w-72 xs:px-0 word-break mx-auto flex flex-col cursor-pointer`}
        >
            { props.loading ?
                    <div className="bg-white rounded-xl shadow-xl h-full flex justify-center items-center">
                        <p className="text-3xl xs:text-4xl">...</p>
                    </div>
                    :
                    (
                        props.translate ?
                            <CardInner
                                side = 'back'
                                translate = {props.translate}
                                setTranslate = {props.setTranslate}
                                addtoMyList = {addtoMyList}
                                setAddtoMyList = {setAddtoMyList}
                                word = {props.word.th}
                            />
                            :
                            <CardInner 
                                side = 'front'
                                translate = {props.translate}
                                setTranslate = {props.setTranslate}
                                addtoMyList = {addtoMyList}
                                setAddtoMyList = {setAddtoMyList}
                                word = {props.word.en}
                            />
                    )
                }
        </div>
    )
}
