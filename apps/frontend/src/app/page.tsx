import StockList from '../components/stock-list.component';
import { getStocks } from '../services/stock.service';

export default async function Index() {
  const stocks = await getStocks();

  return (
    <main className="min-h-screen flex justify-center items-center">
      <StockList stocks={stocks} />
    </main>
  );
}
