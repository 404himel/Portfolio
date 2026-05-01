from django.shortcuts import render


def home(request):
    context = {
        'name': 'Md. Tanvir Mahamud Himel',
        'role': 'Researcher | Competitive Programmer | CSE Student',
        'location': 'Cumilla, Bangladesh',
        'email': 'himel028@stud.cou.ac.bd',
        'phone': '+880 1638649128',
        'linkedin': 'https://www.linkedin.com/in/-himel',
        'github': 'https://github.com/404himel',
    }
    return render(request, 'portfolio/home.html', context)
