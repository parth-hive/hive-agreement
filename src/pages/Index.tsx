import AgreementForm from '@/components/AgreementForm';
import hiveLetterhead from '@/assets/hive-letterhead.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <img 
            src={hiveLetterhead} 
            alt="Hive New York Living" 
            className="w-full max-w-2xl h-auto object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Form */}
          <AgreementForm />
        </div>
      </main>
    </div>
  );
};

export default Index;
