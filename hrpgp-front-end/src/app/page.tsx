"use client"

import { useState, useEffect } from "react";

export default function Home() {

  const [charArr, setCharArr] = useState<{ label: string, value: string }[]>([]);

  function populateFields() {
    const char1: { [key: string]: [string, string] } = {
                          charName: ["Personagem", "Ulfgard"],
                          playerName: ["Jogador", "Gui"],
                          charClass: ["Classe", "Bárbaro"],
                          charLevel: ["Nível", '5']
    }

    const propArr: {label: string, value: string}[] = [];
    for (let key of Object.keys(char1)) {
      propArr.push({label: char1[key][0], value: char1[key][1]});
    }
    setCharArr(propArr);
  }

  useEffect(() => {
    populateFields();
  }, []);

  return (
    <>
      <div className="bg-gray-300 w-full h-[20vh] flex wrap-anywhere">
        <form action="#" className="p-2">
          {charArr.map((item) => (
            <div key={charArr.indexOf(item)} className="flex flex-col w-sm">
              <label className="text-[0.7em] font-bold">{item.label}</label>
              <input type="text" name="char-info" className="bg-white w-[6vw]" placeholder={item.value} readOnly={true}/>
            </div>
          ))}
          
        </form>
      </div>
    </>
  )
}