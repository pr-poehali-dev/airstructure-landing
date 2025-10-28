import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      title: "Спортивные комплексы",
      subtitle: "Для тенниса, футбола, бассейнов",
      price: "от 2 800 000 ₽",
      size: "20×40 м - 100×150 м",
      features: ["Быстрый монтаж 2-3 недели", "Круглогодичная эксплуатация", "Экономия на отоплении 60%", "Без разрешения на строительство"],
      image: "https://cdn.poehali.dev/files/a4316f9c-4a54-4dd4-91ac-361f996a0eae.jpeg"
    },
    {
      title: "Промышленные склады",
      subtitle: "Хранение, производство, логистика",
      price: "от 3 500 000 ₽",
      size: "30×60 м - 120×200 м",
      features: ["Высота до 25 метров", "Большие проёмы для техники", "Минимальные эксплуатационные расходы", "Срок службы 25+ лет"],
      image: "https://cdn.poehali.dev/files/94143a89-5798-44d2-8057-44e82c0d6ccb.jpeg"
    },
    {
      title: "Торговые павильоны",
      subtitle: "Рынки, выставки, ярмарки",
      price: "от 1 900 000 ₽",
      size: "15×30 м - 80×120 м",
      features: ["Мобильность и переносимость", "Светопрозрачные мембраны", "Быстрая окупаемость", "Современный внешний вид"],
      image: "https://cdn.poehali.dev/files/7f75df6f-e945-4fda-bf0f-34205752838b.jpeg"
    }
  ];

  const benefits = [
    { icon: "TrendingDown", title: "Экономия до 70%", desc: "По сравнению с капитальным строительством" },
    { icon: "Clock", title: "Монтаж 2-4 недели", desc: "Быстрый запуск бизнеса" },
    { icon: "Recycle", title: "Мобильность", desc: "Можно демонтировать и перенести" },
    { icon: "Shield", title: "Надёжность", desc: "Проверенные технологии и материалы" },
    { icon: "Snowflake", title: "-50°C до +60°C", desc: "Всесезонная эксплуатация" },
    { icon: "Zap", title: "Энергоэффективность", desc: "Низкие затраты на отопление" }
  ];

  const services = [
    {
      icon: "FileText",
      title: "Проектирование",
      desc: "Индивидуальный проект под ваши задачи",
      price: "Бесплатно при заказе"
    },
    {
      icon: "Truck",
      title: "Доставка",
      desc: "Логистика по всей России",
      price: "Рассчитывается отдельно"
    },
    {
      icon: "HardHat",
      title: "Монтаж под ключ",
      desc: "Профессиональная бригада, полный цикл работ",
      price: "от 850 000 ₽"
    },
    {
      icon: "Wrench",
      title: "Гарантийное обслуживание",
      desc: "Техподдержка и сервис",
      price: "5 лет гарантии"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={24} className="text-primary-foreground" />
            </div>
            <div className="text-xl font-bold">МТК</div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg" className="hidden md:flex">
            <Icon name="Phone" className="mr-2" size={18} />
            Заказать звонок
          </Button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Воздухоопорные сооружения
              <span className="block text-primary mt-2">для вашего бизнеса</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Поставка, проектирование и монтаж под ключ. Современные технологии, выгодные цены, быстрые сроки.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="text-lg px-10 h-16 shadow-lg shadow-primary/30">
                <Icon name="ShoppingCart" className="mr-2" size={22} />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 h-16">
                <Icon name="Calculator" className="mr-2" size={22} />
                Рассчитать стоимость
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-2">
                <div className="text-3xl font-bold text-primary mb-1">5 лет</div>
                <div className="text-sm text-muted-foreground">на рынке</div>
              </Card>
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-2">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">объектов поставлено</div>
              </Card>
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-2">
                <div className="text-3xl font-bold text-primary mb-1">от 2 млн</div>
                <div className="text-sm text-muted-foreground">стоимость под ключ</div>
              </Card>
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-2">
                <div className="text-3xl font-bold text-primary mb-1">2-4 недели</div>
                <div className="text-sm text-muted-foreground">срок монтажа</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">КАТАЛОГ РЕШЕНИЙ</h2>
            <p className="text-xl text-muted-foreground">Подберите оптимальное решение для вашего бизнеса</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-[500px] rounded-2xl overflow-hidden group shadow-2xl">
                <img 
                  src={products[selectedProduct].image} 
                  alt={products[selectedProduct].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-block px-4 py-1 bg-primary rounded-full text-sm font-semibold mb-3">
                    {products[selectedProduct].subtitle}
                  </div>
                  <h3 className="text-4xl font-bold mb-2">{products[selectedProduct].title}</h3>
                  <div className="text-2xl font-bold text-primary">{products[selectedProduct].price}</div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Ruler" className="text-primary" size={24} />
                    <span className="font-semibold">Типовые размеры:</span>
                  </div>
                  <div className="text-lg">{products[selectedProduct].size}</div>
                </Card>

                <Card className="p-6 border-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="CheckCircle2" className="text-primary" size={24} />
                    <span className="font-semibold text-lg">Ключевые преимущества:</span>
                  </div>
                  <ul className="space-y-3">
                    {products[selectedProduct].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <div className="flex gap-3">
                  <Button size="lg" className="flex-1">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Получить КП
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Icon name="FileText" className="mr-2" size={20} />
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {products.map((product, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedProduct(idx)}
                  className={`p-6 rounded-xl text-left transition-all ${
                    selectedProduct === idx 
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                      : 'bg-card border-2 border-border hover:border-primary'
                  }`}
                >
                  <div className="text-xl font-bold mb-2">{product.title}</div>
                  <div className={`text-sm mb-3 ${selectedProduct === idx ? 'opacity-90' : 'text-muted-foreground'}`}>
                    {product.subtitle}
                  </div>
                  <div className="text-lg font-bold">{product.price}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <p className="text-xl text-muted-foreground">6 причин начать сотрудничество сегодня</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-8 border-2 hover:border-primary hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon name={benefit.icon} className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-16 max-w-4xl mx-auto p-10 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Финансовые преимущества</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="DollarSign" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Рассрочка и лизинг</div>
                      <div className="text-sm text-muted-foreground">Гибкие условия оплаты для юридических лиц</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Percent" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Скидки при заказе нескольких объектов</div>
                      <div className="text-sm text-muted-foreground">До 15% при комплексных поставках</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="FileCheck" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Работа по 44-ФЗ и 223-ФЗ</div>
                      <div className="text-sm text-muted-foreground">Участие в государственных тендерах</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border-2">
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-primary mb-2">2 года</div>
                  <div className="text-muted-foreground">средний срок окупаемости</div>
                </div>
                <div className="h-px bg-border my-6"></div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Капитальное здание</span>
                    <span className="font-bold">5-7 лет</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Воздухоопорное</span>
                    <span className="font-bold text-primary">2-3 года</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="services" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">ПОЛНЫЙ ЦИКЛ УСЛУГ</h2>
            <p className="text-xl text-muted-foreground">От идеи до запуска объекта — всё под контролем</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {services.map((service, idx) => (
              <Card key={idx} className="p-8 border-2 hover:border-primary transition-all text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors">
                  <Icon name={service.icon} className="text-primary group-hover:text-primary-foreground transition-colors" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.desc}</p>
                <div className="text-lg font-bold text-primary">{service.price}</div>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto p-10 border-2">
            <h3 className="text-3xl font-bold mb-8 text-center">Этапы работы</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { num: "01", title: "Заявка", desc: "Вы оставляете заявку на сайте или звоните" },
                  { num: "02", title: "Консультация", desc: "Менеджер уточняет задачи и требования" },
                  { num: "03", title: "Расчёт", desc: "Подготовка коммерческого предложения" },
                  { num: "04", title: "Договор", desc: "Согласование условий, подписание документов" }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-bold mb-1">{step.title}</div>
                      <div className="text-sm text-muted-foreground">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  { num: "05", title: "Проектирование", desc: "Разработка технического проекта" },
                  { num: "06", title: "Производство", desc: "Изготовление конструкции на заводе" },
                  { num: "07", title: "Доставка и монтаж", desc: "Логистика и установка под ключ" },
                  { num: "08", title: "Запуск", desc: "Сдача объекта в эксплуатацию" }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-bold mb-1">{step.title}</div>
                      <div className="text-sm text-muted-foreground">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-5xl font-bold mb-6">Получите персональное предложение</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Оставьте заявку, и наш менеджер подготовит для вас расчёт стоимости с учётом всех особенностей проекта
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-lg">+7 (495) 123-45-67</div>
                      <div className="text-sm text-muted-foreground">Звоните с 9:00 до 18:00 (МСК)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-lg">info@mtkcompany.ru</div>
                      <div className="text-sm text-muted-foreground">Ответим в течение 2 часов</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Офис</div>
                      <div className="text-lg">115477, г. Москва</div>
                      <div className="text-sm text-muted-foreground">пр-кт Пролетарский, д. 26, корп. 4</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 border-2 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Быстрая заявка</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Иван Петров"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон *</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-background border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-background border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="email@company.ru"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Тип объекта</label>
                    <select className="w-full px-4 py-3 bg-background border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-colors">
                      <option>Спортивный комплекс</option>
                      <option>Промышленный склад</option>
                      <option>Торговый павильон</option>
                      <option>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <textarea 
                      rows={3}
                      className="w-full px-4 py-3 bg-background border-2 border-input rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Опишите ваши задачи и пожелания..."
                    />
                  </div>
                </div>

                <Button size="lg" className="w-full text-lg h-14">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>

                <div className="mt-4 text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-primary-foreground" />
                </div>
                <div className="text-xl font-bold">МТК</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Московская торговая компания — лидер рынка воздухоопорных сооружений с 2019 года
              </p>
            </div>
            
            <div>
              <div className="font-semibold mb-4">Каталог</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Спортивные комплексы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Промышленные склады</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Торговые павильоны</a></li>
              </ul>
            </div>
            
            <div>
              <div className="font-semibold mb-4">Компания</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Наши проекты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сертификаты</a></li>
              </ul>
            </div>
            
            <div>
              <div className="font-semibold mb-4">Контакты</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@mtkcompany.ru</li>
                <li>115477, г. Москва, пр-кт Пролетарский, д. 26, корп. 4</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2019-2025 МТК. Все права защищены.
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}