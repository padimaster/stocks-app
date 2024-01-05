'use client';

import React, { useState } from 'react';

import { Stock } from '@repo/stock/types';
import { Button } from '@repo/ui/button';

export default function StockList({ stocks }: { stocks: Stock[] }) {
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

  const handleBuyStock = (stock: Stock) => {
    setSelectedStock(stock);
    console.log('buying stock', stock);
  };

  const handleCloseModal = () => {
    setSelectedStock(null);
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Acciones Disponibles</h2>
      <table className="min-w-full bg-white border rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Símbolo</th>
            <th className="py-2 px-4 border-b">Precio</th>
            <th className="py-2 px-4 border-b">Cambio</th>
            <th className="py-2 px-4 border-b">Market Cap</th>
            <th className="py-2 px-4 border-b">Acción</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock: Stock) => (
            <tr key={stock.id}>
              <td className="py-2 px-4 border-b">{stock.symbol}</td>
              <td className="py-2 px-4 border-b">${stock.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{stock.change['1h']}</td>
              <td className="py-2 px-4 border-b">{stock.marketCap}</td>
              <td className="py-2 px-4 border-b">
                <Button onClick={() => {
                  handleBuyStock(stock);
                }}>
                  Comprar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
