const gfName = "MrsRandom";
const gfName1 = "hello";
const gfName2 = "world";
export default gfName;
export { gfName1, gfName2 };
export const generateLovepercent = () => {
    return `${~~(Math.random() * 100)}%`
};