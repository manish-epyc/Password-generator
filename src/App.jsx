import { useReducer, useState } from 'react';
import './App.css';
import { reducer, initialOptions } from './Reducer/reducer';
import Checkbox from './Components/Checkbox';
import Strength from './Components/strength';
import Button from './Components/Button';
import InputRange from './Components/InputRange';


const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+=-[]{}|;:,.<>?/';



function getStrengthFromPassword(password) {

  
    const length = password.length;

    const isUpppercaseIncluded = hasCommonCharacter(password, UPPERCASE);
    const isLowercaseIncluded = hasCommonCharacter(password, LOWERCASE);
    const isNumbersIncluded = hasCommonCharacter(password, NUMBERS);
    const isSymbolsIncluded = hasCommonCharacter(password, SYMBOLS);

    let  totalActiveTypes = 0;

    if (isUpppercaseIncluded) {
        totalActiveTypes ++
    }

    if (isLowercaseIncluded) {
        totalActiveTypes ++
    }

    if (isNumbersIncluded) {
        totalActiveTypes ++
    }

    if (isSymbolsIncluded) {
        totalActiveTypes ++
    }


    const score = length + totalActiveTypes * 2;


    if (score >= 20) return 'STRONG';
    if (score >= 12) return 'MEDIUM';
    return 'WEAK';

}

function hasCommonCharacter(A, B) {
    const setA = new Set(A);
    for (const char of B) {
      if (setA.has(char)) {
        return true;
      }
    }
    return false;
  }

function App() {
    const [options, dispatch] = useReducer(reducer, initialOptions);
    const [length, setLength] = useState(10);
    const [password, setPassword] = useState('');

    const strength = getStrengthFromPassword(password);


    const generatePassword = () => {
        let charset = '';
        options.forEach(opt => {
            if (opt.status) {
                if (opt.title === 'Uppercase') charset += UPPERCASE;
                if (opt.title === 'Lowercase') charset += LOWERCASE;
                if (opt.title === 'Numbers') charset += NUMBERS;
                if (opt.title === 'Symbols') charset += SYMBOLS;
            }
        });

        if (!charset) {
            setPassword('Please select at least one option.');
            return;
        }

        let generated = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generated += charset[randomIndex];
        }

        setPassword(generated);
    };


    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 text-white">
                <h1 className="text-center text-3xl font-mono mt-6 mb-10 text-gray-400">
                    Password Generator
                </h1>

                <div className="flex items-center justify-between bg-gray-700 rounded px-4 py-2 mb-4">
                    <span id="password" className="text-xl font-semibold tracking-wide select-text break-all">{password || 'Click Generate'}</span>
                    <button onClick={copyToClipboard} className="text-green-400 hover:text-green-300 transition">
                        📋
                    </button>
                </div>

                <div className="mb-4">
                    <InputRange length={length} setLength={setLength} />
                </div>

                <div className="space-y-2 text-sm font-mono text-gray-300 mb-4">
         
                    {options.map((option) => (
                        <Checkbox id={option.id} status={option.status} dispatch={dispatch} title={option.title} />
                    ))}
            

                </div>

                <div className="mb-4">
                    <div className="flex justify-between text-sm font-mono text-gray-300">
                        <span>STRENGTH</span>
                        <div className="mt-2 flex gap-1 items-center">
                            <Strength strength={strength} />
                        </div>
                    </div>
                </div>

                <Button generatePassword={generatePassword} />

            </div>
        </div>
    );
}

export default App;
