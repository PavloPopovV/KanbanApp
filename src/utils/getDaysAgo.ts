export const getDaysAgo = (updatedAt: string): string => {
    const updatedDate = new Date(updatedAt);
    const today = new Date();

    const difference = Math.floor((today.getTime() - updatedDate.getTime()) / (1000 * 60 * 60 * 24));
  
    return difference === 0 ? "opened today" : difference === 1 ? `opened ${difference} day ago` : `opened ${difference} days ago`;
};