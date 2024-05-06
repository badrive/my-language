
import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './firstSection.scss'
export const FirstSection = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    const [text2, setText2] = useState("");
    const [result2, setResult2] = useState("");

    const [copyStatus, setCopyStatus] = useState(false);

    const [replacements, setReplacements] = useState({
        "q": "0",
        "w": "9",
        "e": "2",
        "r": "6",
        "t": "8",
        "y": "3",
        "u": "%",
        "i": "=",
        "o": "7",
        "p": "1",
        "a": "t",
        "s": "w",
        "d": "k",
        "f": "q",
        "g": "p",
        "h": "z",
        "j": "i",
        "k": "u",
        "l": "d",
        "z": "o",
        "x": "l",
        "c": "b",
        "v": "m",
        "b": "n",
        "n": "e",
        "m": "s",

    });

    const handleClick1 = () => {
        let newString = text.split('').map(char => replacements[char] || char).join('');
        setResult(newString);
    };


    const [replacements2, setReplacements2] = useState({
        "0": "q",
        "9": "w",
        "2": "e",
        "6": "r",
        "8": "t",
        "3": "y",
        "%": "u",
        "=": "i",
        "7": "o",
        "1": "p",
        "t": "a",
        "w": "s",
        "k": "d",
        "q": "f",
        "p": "g",
        "z": "h",
        "i": "j",
        "u": "k",
        "d": "l",
        "o": "z",
        "l": "x",
        "b": "c",
        "m": "v",
        "n": "b",
        "e": "n",
        "s": "m"

    });

    const handleClick2 = () => {
        let newString2 = text2.split('').map(char => replacements2[char] || char).join('');
        setResult2(newString2);
    };




    const handleChange = (event) => {
        setText(event.target.value); // Update state with the new value from the input
    };

    const handleChange2 = (event) => {
        setText2(event.target.value); // Update state with the new value from the input
    };

    const onCopyText = () => {
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
      };

    return (
        <>
            <nav className='p-5 border-b-[1px] border-[#ffffff41]'>
                <h1 className='text-center text-4xl font-bold text-white jaini-purva-regular'>Propreypter</h1>
            </nav>
            <div className="flex md:flex-row flex-col justify-evenly items-center gap-5 h-full p-10">
                <div className='flex flex-col gap-5 w-full'>
                    <input className='bg-[#192646] rounded-lg p-3 h-48 w-full border-t-2 border-[#293445] opacity-90 text-white' type="text" onChange={handleChange} value={text} />
                    <button onClick={handleClick1} className='bg-[#293655] hover:bg-[#38445f] p-5 rounded-lg font-bold text-white jaini-purva-regular text-2xl'>Encypt</button>

                    <div className="relative">
                        <input className='bg-[#192646] rounded-lg p-3 h-48 w-full border-t-2 border-[#293445] opacity-90 text-white cursor-text' type="text" value={result} disabled />
                        <CopyToClipboard text={result} onCopy={onCopyText}>
                            <button className="bg-[#293655] hover:bg-[#38445f] p-2 rounded-lg font-bold text-white jaini-purva-regular text-xl w-fit absolute right-0 top-0 mt-2 mr-2">Copy</button>
                        </CopyToClipboard>
                    </div>
                </div>

                <div className='flex flex-col gap-5 w-full'>
                    <input className='bg-[#211e3b] rounded-lg p-3 h-48 w-full border-t-2 border-[#293445] opacity-90 text-white' type="text" onChange={handleChange2} value={text2} />
                    <button onClick={handleClick2} className='bg-[#382955] hover:bg-[#46385f] p-5 rounded-lg font-bold text-white jaini-purva-regular text-2xl'>Decrypt</button>

                    <div className="relative">
                        <input className='bg-[#211e3b] rounded-lg p-3 h-48 w-full border-t-2 border-[#293445] opacity-90 text-white cursor-text' type="text" value={result2} disabled />
                        <CopyToClipboard text={result2} onCopy={onCopyText}>
                            <button className="bg-[#382955] hover:bg-[#46385f] p-2 rounded-lg font-bold text-white jaini-purva-regular text-xl w-fit absolute right-0 top-0 mt-2 mr-2">Copy</button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </>
    );
}
