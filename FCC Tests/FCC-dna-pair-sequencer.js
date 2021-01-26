function pairElement(str) {
  const DNAMap = { A: 'T', T: 'A', C: 'G', G: 'C' }

  const DNASeq = [...str]
  const DNAPairedSeq = DNASeq.map(gen => [gen, DNAMap[gen]])
  return DNAPairedSeq
}

console.log(
pairElement("GCG")
)
