/**
 * 2. Group words with same set of characters
 */

const characters = ['VMRCO', 'VORCM', 'MCRTOX', 'ZXTAC', 'XZATC', 'XMTCOR', 'OXVS', 'AZTXC', 'VXOS', 'RZAT', 'MRCOTX', 'SVXO', 'TRAZ', 'ZTAR', 'MVOCR'];
const isSameGroups = (text, group) => {
  const textObj = text.split("");
  let isMatchAll = true;

  for (let t of textObj) {
    if (!group.includes(t)) {
      isMatchAll = false;
      break;
    }
  }
  return isMatchAll;
}

const characterGroups = characters.reduce((prev , cur) => {
  if (Object.values(prev).length === 0) {
    prev[cur] = [];
    prev[cur].push(cur);
    return prev;
  }

  const groupKey = Object.keys(prev).find(item => {
    return item.length === cur.length && isSameGroups(cur, item)
  });

  if (groupKey) {
    prev[groupKey].push(cur);
  } else {
    prev[cur] = [];
    prev[cur].push(cur);
  }

  return { ...prev }
}, {});

Object.values(characterGroups).forEach((item, index) => {
  console.log(`${index+1} ${item.join(" - ")}`)
});