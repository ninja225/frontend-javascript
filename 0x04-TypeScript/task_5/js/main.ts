// MajorCredits interface with brand property
interface MajorCredits {
    credits: number;
    brand: 'major';
}

// MinorCredits interface with brand property
interface MinorCredits {
    credits: number;
    brand: 'minor';
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'major'
    };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'minor'
    };
}