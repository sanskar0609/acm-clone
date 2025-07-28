export const blogPosts = [
    {
      id: '1',
      title: "The Future of Artificial Intelligence: Trends to Watch",
      excerpt: "Explore the cutting-edge developments in AI and how they're shaping our world.",
      content: `
        [first para]Artificial Intelligence (AI) is rapidly evolving, transforming industries and our daily lives. This article delves into the most significant AI trends that are set to dominate in the coming years.[/first para]
  
        [second para]1. Ethical AI: As AI becomes more prevalent, there's a growing focus on developing ethical guidelines and frameworks to ensure AI systems are fair, transparent, and accountable.[/second para]
  
        [third para]2. AI in Healthcare: From early disease detection to personalized treatment plans, AI is revolutionizing healthcare. We'll explore how machine learning algorithms are improving patient outcomes and streamlining medical processes.[/third para]
  
        [fourth para]3. Natural Language Processing (NLP) Advancements: With models like GPT-3 pushing the boundaries of what's possible, we'll look at how NLP is enhancing human-computer interaction and enabling more sophisticated language understanding and generation.[/fourth para]
  
        [fifth para]4. AI in Cybersecurity: As cyber threats evolve, so do our defenses. We'll examine how AI is being used to detect and prevent cyber attacks in real-time, protecting sensitive data and systems.[/fifth para]
  
        [sixth para]5. Explainable AI: The 'black box' nature of some AI systems is a concern. We'll discuss the movement towards making AI decision-making processes more interpretable and explainable.[/sixth para]
  
        [seventh para]The future of AI is bright and full of potential. As these trends continue to develop, they will undoubtedly shape the technology landscape and our society in profound ways.[/seventh para]
      `,
      image: '/blog1.png',
      category: 'Technology',
      readTime: '8 min read',
      likes: 127,
      tags: ['AI', 'Machine Learning', 'Technology Trends']
    },
    {
      id: '2',
      title: "Raising the Dead with AI",
      excerpt: "Using artificial intelligence to create lifelike avatars of people who have passed.",
      content: `
        [first para]It now is possible to use technology to raise the dead. Well, kind of.[/first para]
        
        [second para]We haven’t cracked the code on how to live forever, or discovered how to bring someone back to biological life. Instead, it has become much easier and more common to “resurrect” the dead by creating lifelike artificial intelligence (AI) avatars of them.[/second para]
        
        [third para]Thanks to advancements in generative AI, users can speak with “ghostbots” that mimic people who have passed away. The practice of conversing with a posthumous representation of a dead person is growing in popularity.[/third para]
        
        [fourth para]However, experts warn of the emotional, legal, and ethical challenges. Ghostbots, though technologically impressive, can stall the grieving process, erode reality, and create moral dilemmas regarding consent and digital legacy.[/fourth para]
        
        [fifth para]Despite the promise of AI, society remains hesitant. The technology evolves faster than our ability to adapt, raising profound questions about life, death, and the boundaries between the digital and the real.[/fifth para]
      `,
      image: '/blog2.png',
      category: 'Artificial Intelligence',
      readTime: '15 min read',
      likes: 200,
      tags: ['AI', 'Ethics', 'Ghostbots'],
      publishedAt: 'March 12, 2025'
    },
  
    {
      id: '3',
      title: "Technical Perspective: The Surprising Power of Spectral Refutation",
      excerpt: "Exploring spectral algorithms and their surprising applications beyond refutation heuristics.",
      content: `
        [first para]"New Spectral Algorithms for Refuting Smoothed k-SAT," by Venkatesan Guruswami et al., presents state-of-the-art research on spectral refutation, with implications that transcend the domain of refutation heuristics.[/first para]
  
        [second para]NP-hard problems are assumed to be computationally intractable, meaning that no efficient (polynomial time) algorithm is guaranteed to correctly solve every input instance. One way of coping with NP-hardness is via the use of reliable heuristics. These are efficient algorithms that might not solve every input instance, but when they claim a solution, the solution is guaranteed to be correct.[/second para]
  
        [third para]Consider the canonical NP-complete problem of SAT (determining whether a Boolean formula of the form (x1∨¬x2∨x3)∧(x2∨¬x4)∧... has a satisfying assignment). A heuristic for finding satisfying assignments will naturally be reliable, because one can efficiently check whether the assignment found indeed satisfies all clauses of the input formula. However, designing reliable refutation heuristics that certify that a formula is not satisfiable is more challenging. Under the commonly accepted assumption that NP differs from co-NP, there are no polynomial size witnesses for unsatisfiability. Hence, there is no natural candidate for what a reliable refutation heuristic should search for to certify that an input formula is not satisfiable.[/third para]
  
        [fourth para]The absence of natural witnesses does not imply there are no “unnatural” witnesses. For example, consider an algorithm that constructs some matrix based on the input formula, computes the largest eigenvalue of the matrix (this can be done in polynomial time), and if this eigenvalue is sufficiently small, declares that the formula is not satisfiable. Could it be that such an algorithm, that seems unrelated to SAT, can serve as a reliable refutation heuristic? Perhaps surprisingly, the answer is yes.[/fourth para]
  
        [fifth para]Algorithms that base their decisions on eigenvalues of appropriately chosen matrices are referred to as spectral algorithms (the set of eigenvalues of a matrix is referred to as its spectrum). They have traditionally been applied to problems whose input is naturally represented as a matrix, such as clustering problems (the distance matrix) and graph problems (the adjacency matrix). The input for k-SAT (instances of SAT in which every clause has exactly k literals) does not seem to have a natural representation as a matrix. Nevertheless, over two decades ago it was proved that spectral algorithms can reliably refute most sufficiently dense k-SAT instances, when k is even.[/fifth para]
  
        [sixth para]Spectral refutation heuristics involve clever choices of matrices, such as Kikuchi matrices, and sophisticated techniques for analyzing their eigenvalues. The accompanying paper presents the state of the art in this line of research. It also presents implications that transcend beyond the domain of refutation heuristics.[/sixth para]
      `,
      image: '/blog3.png',
      category: 'Mathematics & Computation',
      readTime: '12 min read',
      likes: 98,
      tags: ['Spectral Algorithms', 'NP-hard Problems', 'Mathematical Computation'],
      publishedAt: 'March 12, 2025'
    }
    
  ];
  
  