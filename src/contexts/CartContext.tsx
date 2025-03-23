
import { createContext, useContext, useState, ReactNode } from 'react';

type CartContextType = {
  cartItems: string[];
  addToCart: (itemId: string) => void;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (itemId: string) => {
    setCartItems((prev) => [...prev, itemId]);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart,
        cartCount: cartItems.length 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
