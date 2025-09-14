import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, ShoppingBag, Phone, Mail, MapPin, Clock, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-primary/20 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/moni.png"
              alt="Moni - Ihre Alltagshelferin"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance leading-[3.5rem]">
            Persönliche Alltagshilfe für&nbsp;
            <br />
            Malsch, Karlsruhe und Umgebung
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 text-pretty">
            Ich bin Monika und helfe gerne Familien und Senioren im Alltag.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            
            
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Über mich
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {
                  "Als fitte Rentnerin mit viel Lebenserfahrung bringe ich Verlässlichkeit, Geduld und echte Freude am Umgang mit Menschen mit. Ob Kinder oder Senioren – kontaktieren Sie mich einfach und wir können herausfinden, ob ich Sie unterstützen kann."
                }
              </p>
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary" />
                  <span>Erfahren</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Zuverlässig</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>Herzlich</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Was ich geben kann</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Kinderbetreuung */}
            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Kinderbetreuung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  Sicheres Abholen von der Schule oder eine verantwortungsvolle Betreuung Ihrer Kinder. Mit Geduld und Erfahrung sorge ich dafür, dass sich Ihre Kleinen wohlfühlen.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Seniorenbegleitung */}
            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-foreground">Seniorenbegleitung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  Begleitung zu Einkäufen, Arztbesuchen oder Spaziergängen. Ich bin eine verständnisvolle
                  Gesprächspartnerin und zuverlässige Hilfe.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Alltagsunterstützung */}
            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">Alltagsunterstützung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  Hilfe bei Behördengängen, Besorgungen oder anderen alltäglichen Aufgaben. Fragen Sie gerne nach und ich kann sagen, ob ich weiterhelfen kann.                    
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Kontakt aufnehmen</h2>

          {/* Wrapper zentriert die Karte horizontal */}
          <div className="flex justify-center">
            <Card className="w-full max-w-xl bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Direkt erreichen</CardTitle>
                <CardDescription className="text-muted-foreground">Schreiben Sie mir gerne eine E-Mail.</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <a href="tel:+4972150123456" className="text-primary hover:underline">
                      noch nicht verfügbar
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">E-Mail</p>
                    <a href="mailto:monis.alltagshilfe@gmail.com" className="text-primary hover:underline break-all">
                      alltagshilfe.malsch@proton.me
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">Wo ich tätig werden kann</p>
                    <p className="text-muted-foreground">Umgebung von Karlsruhe &amp; Malsch</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/20 py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-2">© 2025 Alltagshilfe Karlsruhe, Malsch und Umgebung</p>
          
        </div>
      </footer>
    </div>
  )
}
