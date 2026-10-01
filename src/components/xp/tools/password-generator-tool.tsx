"use client";

import { useState } from "react";
import { Copy, Check, RefreshCw } from "lucide-react";
import { XpButton } from "@/components/xp/xp-button";
import { XpInput } from "@/components/xp/xp-input";

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = LOWER.toUpperCase();
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*-_=+?";

function generatePassword(length: number, useUpper: boolean, useDigits: boolean, useSymbols: boolean): string {
  let pool = LOWER;
  if (useUpper) pool += UPPER;
  if (useDigits) pool += DIGITS;
  if (useSymbols) pool += SYMBOLS;

  const bytes = new Uint32Array(length);
  if (typeof window !== "undefined" && window.crypto) {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < length; i++) bytes[i] = Math.floor(Math.random() * 4294967295);
  }
  let result = "";
  for (let i = 0; i < length; i++) {
    result += pool[bytes[i] % pool.length];
  }
  return result;
}

/** Fully client-side password generator - nothing is sent anywhere. */
export function PasswordGeneratorTool() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState(() => generatePassword(16, true, true, true));
  const [copied, setCopied] = useState(false);

  function regenerate() {
    setPassword(generatePassword(length, useUpper, useDigits, useSymbols));
    setCopied(false);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable - nothing more we can do here.
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <XpInput
          readOnly
          value={password}
          aria-label="Mot de passe généré"
          className="w-full rounded-l-sm rounded-r-none font-mono"
        />
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copier le mot de passe"
          className="xp-btn xp-focusable rounded-none border-l-0 px-2"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
        <button
          type="button"
          onClick={regenerate}
          aria-label="Générer un nouveau mot de passe"
          className="xp-btn xp-focusable rounded-l-none rounded-r-sm border-l-0 px-2"
        >
          <RefreshCw className="h-3.5 w-3.5" />
        </button>
      </div>

      <label className="flex items-center gap-2 text-[13px]">
        <span className="w-28 shrink-0">Longueur : {length}</span>
        <input
          type="range"
          min={8}
          max={32}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="flex-1"
        />
      </label>

      <div className="flex flex-wrap gap-4 text-[13px]">
        <label className="flex items-center gap-1.5">
          <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} />
          Majuscules
        </label>
        <label className="flex items-center gap-1.5">
          <input type="checkbox" checked={useDigits} onChange={(e) => setUseDigits(e.target.checked)} />
          Chiffres
        </label>
        <label className="flex items-center gap-1.5">
          <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} />
          Symboles
        </label>
      </div>

      <XpButton type="button" onClick={regenerate} variant="primary" className="self-start">
        Générer
      </XpButton>
    </div>
  );
}
