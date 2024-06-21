const data = [
        { studentID: 1, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 2, MBTI: "ESFP", descriptor: "Entertainer", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 3, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "Turbulent", program: "Experimental Animation", role: "Student" },
        { studentID: 4, MBTI: "ENTP", descriptor: "Debater", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Student" },
        { studentID: 5, MBTI: "ISFJ", descriptor: "Defender", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Student" },
        { studentID: 6, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 7, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 8, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "N/A", program: "Creative Writing", role: "Student" },
        { studentID: 9, MBTI: "ENFJ", descriptor: "Protagonist", assertiveTurbulent: "N/A", program: "Illustration", role: "Student" },
        { studentID: 10, MBTI: "INTP", descriptor: "Architect", assertiveTurbulent: "N/A", program: "Experimental Animation", role: "Student" },
        { studentID: 11, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Student" },
        { studentID: 12, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Student" },
        { studentID: 13, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 14, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 15, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 16, MBTI: "ISFP", descriptor: "Adventurer", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 17, MBTI: "ISFJ", descriptor: "Defender", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 18, MBTI: "ESFP", descriptor: "Entertainer", assertiveTurbulent: "Turbulent", program: "Integrated Media", role: "Student" },
        { studentID: 19, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 20, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 21, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 22, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "N/A", program: "Creative Writing", role: "Student" },
        { studentID: 23, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 24, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 25, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 26, MBTI: "ISFP", descriptor: "Adventurer", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 27, MBTI: "ENFJ", descriptor: "Protagonist", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 28, MBTI: "ISFP", descriptor: "Adventurer", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 29, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 30, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 31, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 32, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 33, MBTI: "ISTP", descriptor: "Virtuoso", assertiveTurbulent: "Assertive", program: "Graphic Design", role: "Student" },
        { studentID: 34, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "N/A", program: "Environmental Design", role: "Student" },
        { studentID: 35, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 36, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Illustration", role: "Student" },
        { studentID: 37, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Creative Writing", role: "Student" },
        { studentID: 38, MBTI: "ENFJ", descriptor: "Protagonist", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 39, MBTI: "ENFJ", descriptor: "Protagonist", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Student" },
        { studentID: 40, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 41, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 42, MBTI: "ENFJ", descriptor: "Protagonist", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 43, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 44, MBTI: "ENTJ", descriptor: "Commander", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 45, MBTI: "ENTJ", descriptor: "Commander", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 46, MBTI: "ENTJ", descriptor: "Commander", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 47, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 48, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 49, MBTI: "ENFJ", descriptor: "Protagonist", assertiveTurbulent: "N/A", program: "Illustration", role: "Student" },
        { studentID: 50, MBTI: "INFJ", descriptor: "Advocate", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 51, MBTI: "INFJ", descriptor: "Advocate", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Student" },
        { studentID: 52, MBTI: "ENFJ", descriptor: "Protagonist", assertiveTurbulent: "Turbulent", program: "Illustration", role: "Student" },
        { studentID: 53, MBTI: "ENTJ", descriptor: "Commander", assertiveTurbulent: "Assertive", program: "Advertising", role: "Student" },
        { studentID: 54, MBTI: "ENFJ", descriptor: "Protagonist", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 55, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 56, MBTI: "ENFJ", descriptor: "Protagonist", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 57, MBTI: "INFJ", descriptor: "Advocate", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 58, MBTI: "INFJ", descriptor: "Advocate", assertiveTurbulent: "N/A", program: "Integrated Media", role: "Student" },
        { studentID: 59, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 60, MBTI: "ENTJ", descriptor: "Commander", assertiveTurbulent: "N/A", program: "Digital Futures", role: "Student" },
        { studentID: 61, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Advertising", role: "Student" },
        { studentID: 62, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Integrated Media", role: "Student" },
        { studentID: 63, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "N/A", program: "Illustration", role: "Student" },
        { studentID: 64, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Illustration", role: "Student" },
        { studentID: 65, MBTI: "ISTJ", descriptor: "Logistician", assertiveTurbulent: "N/A", program: "Illustration", role: "Student" },
        { studentID: 66, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "N/A", program: "Experimental Animation", role: "Student" },
        { studentID: 67, MBTI: "INFJ", descriptor: "Advocate", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Student" },
        { studentID: 68, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "Turbulent", program: "Experimental Animation", role: "Student" },
        { studentID: 69, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "N/A", program: "Illustration", role: "Student" },
        { studentID: 70, MBTI: "ISFJ", descriptor: "Defender", assertiveTurbulent: "Assertive", program: "Illustration", role: "Student" },
        { studentID: 71, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Creative Writing", role: "Student" },
        { studentID: 72, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Creative Writing", role: "Student" },
        { studentID: 73, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Creative Writing", role: "Student" },
        { studentID: 74, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 75, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "N/A", program: "Experimental Animation", role: "Student" },
        { studentID: 76, MBTI: "ENTJ", descriptor: "Commander", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 77, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 78, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Illustration", role: "Student" },
        { studentID: 79, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "Turbulent", program: "Experimental Animation", role: "Student" },
        { studentID: 80, MBTI: "ISFP", descriptor: "Adventurer", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Student" },
        { studentID: 81, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Student" },
        { studentID: 82, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Faculty" },
        { studentID: 83, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "Assertive", program: "Animation", role: "Student" },
        { studentID: 84, MBTI: "ISTJ", descriptor: "Logistician", assertiveTurbulent: "Assertive", program: "Photography", role: "Faculty" },
        { studentID: 85, MBTI: "ENTJ", descriptor: "Commander", assertiveTurbulent: "N/A", program: "Creative Writing", role: "Student" },
        { studentID: 86, MBTI: "INFJ", descriptor: "Advocate", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 87, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Experimental Animation", role: "Student" },
        { studentID: 88, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "Assertive", program: "Graphic Design", role: "Student" },
        { studentID: 89, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "Turbulent", program: "Graphic Design", role: "Faculty" },
        { studentID: 90, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 91, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "N/A", program: "Digital Futures", role: "Student" },
        { studentID: 92, MBTI: "ENFP", descriptor: "Campaigner", assertiveTurbulent: "N/A", program: "Integrated Media", role: "Student" },
        { studentID: 93, MBTI: "ESFJ", descriptor: "Consul", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Faculty" },
        { studentID: 94, MBTI: "INTP", descriptor: "Logician", assertiveTurbulent: "Turbulent", program: "Integrated Media", role: "Student" },
        { studentID: 95, MBTI: "INTJ", descriptor: "Architect", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 96, MBTI: "INFP", descriptor: "Mediator", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 97, MBTI: "INFJ", descriptor: "Advocate", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Student" },
        { studentID: 98, MBTI: "INFJ", descriptor: "Advocate", assertiveTurbulent: "N/A", program: "Graphic Design", role: "Faculty" },
    ];

    const mbtiInformation = {
        INTJ: {
            descriptor: "Architect", 
            description: "Imaginative and strategic thinkers, INTJs are known for their ability to turn theories into solid plans of action. They value knowledge and competence, and typically have high standards in these regards, which they continuously strive to fulfill. Often independent, INTJs can be perceived as ambitious and decisive." 
        },
        INTP: {
            descriptor: "Logician", 
            description: "INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all their complexity." 
        },
        ENTJ: {
            descriptor: "Commander", 
            description: "ENTJs are natural-born leaders, with a bold and strong-willed disposition that inspires others. They are characterized by a decisive nature and powerful charisma, which helps them draw people together behind a common goal. They are strategic in their thinking and natural problem solvers." 
        },
        ENTP: {
            descriptor: "Debater", 
            description: "ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious about the world around them, and they have a wide range of interests. ENTPs are energetic and can often inspire others to think about what might be possible." 
        },
        INFJ: {
            descriptor: "Advocate", 
            description: "INFJs are idealists and visionaries, often feeling a compulsion to make the world a better place. They are deep thinkers and empathetic individuals who are keenly attuned to others' feelings and needs. INFJs seek authenticity in their relationships and activities." 
        },
        INFP: {
            descriptor: "Mediator", 
            description: "INFPs are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. They are loyal to their values and to people who are important to them. INFPs want an external life that is congruent with their values." 
        },
        ENFJ: {
            descriptor: "Protagonist", 
            description: "ENFJs are natural leaders, full of passion and charisma. With a natural confidence that begets influence, ENFJs take pride in guiding others to achieve their dreams and goals. They are also deeply caring and empathetic." 
        },
        ENFP: {
            descriptor: "Campaigner", 
            description: "ENFPs are enthusiastic, creative, and sociable free spirits who can always find a reason to smile. They are highly emotional and sensitive, and are very perceptive and thoughtful of others. ENFPs are known for their incredible ways of inspiring and motivating those around them." 
        },
        ISTJ: {
            descriptor: "Logistician", 
            description: "ISTJs are reliable and dutiful, valuing integrity and responsibility in all their work. Known for their practical logic and tireless dedication, they enjoy creating order and are great at executing tasks. ISTJs are methodical in their approach and can be trusted to get the job done." 
        },
        ISFJ: {
            descriptor: "Defender", 
            description: "ISFJs are protectors, often found taking care of others in practical ways. They are sensitive to others' feelings and strive to create environments of order and harmony. Loyal and hardworking, ISFJs are typically meticulous to the point of perfectionism." 
        },
        ESTJ: {
            descriptor: "Executive", 
            description: "ESTJs are excellent organizers and thrive on order and continuity. Known for their clear advice and guidance, they expect that others will respect their authority. They are decisive and value efficiency and effectiveness in all things." 
        },
        ESFJ: {
            descriptor: "Consul", 
            description: "ESFJs are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others. ESFJs enjoy supporting others and are typically organized and good at making plans." 
        },
        ISTP: {
            descriptor: "Virtuoso", 
            description: "ISTPs are bold and practical experimenters, masters of all kinds of tools. They excel in situations that require quick thinking and spontaneous decisions. ISTPs are typically reserved yet observant, with a keen interest in understanding how things work." 
        },
        ISFP: {
            descriptor: "Adventurer", 
            description: "ISFPs are flexible and charming, always ready to explore and experience something new. They are artists with a very aesthetic approach to life, and they enjoy acting on their impulses. ISFPs often look to make a change in the world through their explorative and artistic talents." 
        },
        ESTP: {
            descriptor: "Entrepreneur", 
            description: "ESTPs are energetic and action-oriented, always engaged in some activity. They are perceptive and enjoy the thrill of living on the edge. ESTPs are straightforward and prefer to take a practical approach, often making them effective problem solvers." 
        },
        ESFP: {
            descriptor: "Entertainer", 
            description: "ESFPs are spontaneous, energetic, and enthusiastic entertainers who enjoy putting on a show for the enjoyment of others. They live in the moment and are very adaptable, often thriving in situations that require quick thinking and flexibility. ESFPs love vibrant experiences and engaging with people." 
        }
    };


export {data, mbtiInformation};