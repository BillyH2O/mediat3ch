"use client";

import { useMemo, useState } from "react";
import { XpInput } from "@/components/xp/xp-input";

const UNITS = ["o", "Ko", "Mo", "Go", "To"] as const;
type Unit = (typeof UNITS)[number];

function toBytes(value: number, unit: Unit): number {
  const power = UNITS.indexOf(unit);
  return value * Math.pow(1024, power);
}

function fromBytes(bytes: number, unit: Unit): number {
  const power = UNITS.indexOf(unit);
  return bytes / Math.pow(1024, power);
}

/** Converts between bytes, kilo-, mega-, giga- and terabytes (base 1024). */
export function DataUnitConverterTool() {
  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState<Unit>("Go");
  const [toUnit, setToUnit] = useState<Unit>("Mo");

  const result = useMemo(() => {
    const numeric = Number.parseFloat(value.replace(",", "."));
    if (Number.isNaN(numeric)) return null;
    const bytes = toBytes(numeric, fromUnit);
    return fromBytes(bytes, toUnit);
  }, [value, fromUnit, toUnit]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <XpInput
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Valeur à convertir"
          className="w-24"
        />
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as Unit)}
          className="xp-input"
          aria-label="Unité de départ"
        >
          {UNITS.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
        <span className="text-[13px]">=</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value as Unit)}
          className="xp-input"
          aria-label="Unité d'arrivée"
        >
          {UNITS.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>

      <p className="text-[15px] font-semibold text-[#111]">
        {result === null
          ? "Valeur invalide"
          : `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 4 }).format(result)} ${toUnit}`}
      </p>
    </div>
  );
}
