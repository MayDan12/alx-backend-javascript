export default function updateUniqueItems(itemsMap) {
  if (!itemsMap || typeof itemsMap !== 'object' || itemsMap.__proto__ !== Map.prototype) {
    throw new Error('Cannot process');
  }

  const updatedMap = itemsMap
  // Create a new Map to avoid modifying the original
  for (const [item, quantity] of updatedMap.entries()) {
    if (quantity === 1) {
      updatedMap.set(item, 100);
    }
  }
  
  return updatedMap;
}
