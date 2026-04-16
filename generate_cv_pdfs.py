#!/usr/bin/env python3
"""
Script para generar CVs en PDF en 3 idiomas (ES, EN, CA)
Requiere: pip install reportlab pillow
"""

from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from datetime import datetime
import os

# Colores
COLOR_PRIMARY = colors.HexColor("#ff4d4d")
COLOR_DARK = colors.HexColor("#0a0a0a")
COLOR_GRAY = colors.HexColor("#666666")
COLOR_LIGHT_GRAY = colors.HexColor("#f5f5f5")

# Estilos
styles = getSampleStyleSheet()

# Estilo personalizado para títulos
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=24,
    textColor=COLOR_DARK,
    spaceAfter=6,
    fontName='Helvetica-Bold'
)

# Estilo para subtítulos
subtitle_style = ParagraphStyle(
    'CustomSubtitle',
    parent=styles['Heading2'],
    fontSize=12,
    textColor=COLOR_PRIMARY,
    spaceAfter=4,
    fontName='Helvetica-Bold'
)

# Estilo para secciones
section_style = ParagraphStyle(
    'SectionTitle',
    parent=styles['Heading2'],
    fontSize=14,
    textColor=COLOR_DARK,
    spaceAfter=8,
    spaceBefore=12,
    fontName='Helvetica-Bold',
    borderPadding=5,
    borderColor=COLOR_PRIMARY,
    borderWidth=2,
    borderLeftWidth=4
)

# Contenido en 3 idiomas
CONTENT = {
    'es': {
        'title': 'Iván Gutierrez Romero',
        'role': 'Técnico en Sistemas & Desarrollador',
        'contact': [
            'Email: ciruelomayka@gmail.com',
            'Teléfono: +34 635 074 516',
            'Ubicación: Caldes de Montbui, Barcelona, España',
            'GitHub: github.com/veki123-boop'
        ],
        'summary_title': 'Resumen',
        'summary': 'Tengo 17 años y estoy muy motivado para aprender y crecer en el campo de la tecnología. Me interesan especialmente áreas como la programación, la inteligencia artificial y los sistemas informáticos. Me apasiona comprender cómo funciona la tecnología, todo lo que tenga que ver con aprender de cosas con tecnología me parece interesante.',
        'experience_title': 'Experiencia Laboral',
        'experience': [
            {
                'title': 'Ayudante de Informática',
                'company': 'APP Caldes',
                'date': 'Febrero 2025 - Junio 2025',
                'description': [
                    'Configuración de Sistemas Operativos (instalación de Windows, drivers, actualizaciones)',
                    'Mantenimiento de Equipos Informáticos',
                    'Formateo e instalación de ordenadores',
                    'Instalación y configuración de programas básicos (Office, navegadores, antivirus, etc.)',
                    'Montaje y sustitución de componentes de hardware'
                ]
            }
        ],
        'education_title': 'Educación',
        'education': [
            {
                'title': 'Técnico en Sistemas Microinformáticos y Redes (SMX)',
                'school': 'La Ferreria',
                'date': 'Septiembre 2025 - Presente',
                'description': 'Grado Medio en Sistemas Microinformáticos y Redes - En curso'
            },
            {
                'title': 'Ayudante de Mantenimiento de Equipos Informáticos',
                'school': 'La Ferreria',
                'date': 'Septiembre 2024 - Junio 2025',
                'description': 'Programa de Formación Inicial (PFI) - Completado'
            }
        ],
        'skills_title': 'Habilidades',
        'technical_skills': 'HTML, CSS, C++, Linux, VMware, VirtualBox, SFTP, SSH, Minecraft, Redes, Hardware',
        'personal_skills': 'Buena Comunicación, Buena Adaptabilidad, Aprendizaje Rápido, Mucha Constancia',
        'languages_title': 'Idiomas',
        'languages': [
            'Catalán - Nativo',
            'Español - Nativo',
            'Inglés - Muy bueno',
            'Portugués - Básico'
        ],
        'hobbies_title': 'Aficiones',
        'hobbies': 'En mis tiempos libres dedico parte de mi tiempo a seguir aprendiendo y mejorando mis conocimientos en el ámbito de la tecnología. Actualmente estoy aprendiendo programación en C++, practicando con pequeños proyectos y ejercicios. También me interesa la configuración y programación de servidores de Minecraft, trabajando con herramientas como SFTP para gestionar y configurar remotamente.'
    },
    'en': {
        'title': 'Iván Gutierrez Romero',
        'role': 'Systems Technician & Developer',
        'contact': [
            'Email: ciruelomayka@gmail.com',
            'Phone: +34 635 074 516',
            'Location: Caldes de Montbui, Barcelona, Spain',
            'GitHub: github.com/veki123-boop'
        ],
        'summary_title': 'Summary',
        'summary': 'I\'m 17 years old and very motivated to learn and grow in the technology field. I\'m especially interested in programming, artificial intelligence and computer systems. I\'m passionate about understanding how technology works. Everything related to learning about technology interests me.',
        'experience_title': 'Work Experience',
        'experience': [
            {
                'title': 'IT Assistant',
                'company': 'APP Caldes',
                'date': 'February 2025 - June 2025',
                'description': [
                    'Operating System Configuration (Windows installation, drivers, updates)',
                    'Computer Equipment Maintenance',
                    'Computer Formatting and Installation',
                    'Installation and Configuration of Basic Programs (Office, browsers, antivirus, etc.)',
                    'Assembly and Replacement of Hardware Components'
                ]
            }
        ],
        'education_title': 'Education',
        'education': [
            {
                'title': 'Technician in Microcomputer Systems and Networks (SMX)',
                'school': 'La Ferreria',
                'date': 'September 2025 - Present',
                'description': 'Higher Diploma in Microcomputer Systems and Networks - In progress'
            },
            {
                'title': 'IT Equipment Maintenance Assistant',
                'school': 'La Ferreria',
                'date': 'September 2024 - June 2025',
                'description': 'Initial Training Program (PFI) - Completed'
            }
        ],
        'skills_title': 'Skills',
        'technical_skills': 'HTML, CSS, C++, Linux, VMware, VirtualBox, SFTP, SSH, Minecraft, Networks, Hardware',
        'personal_skills': 'Good Communication, Good Adaptability, Quick Learning, Great Perseverance',
        'languages_title': 'Languages',
        'languages': [
            'Catalan - Native',
            'Spanish - Native',
            'English - Very Good',
            'Portuguese - Basic'
        ],
        'hobbies_title': 'Hobbies',
        'hobbies': 'In my free time I dedicate part of my time to continue learning and improving my knowledge in the field of technology. I\'m currently learning C++ programming, practicing with small projects and exercises. I\'m also interested in Minecraft server configuration and programming, working with tools like SFTP to manage and configure remotely.'
    },
    'ca': {
        'title': 'Iván Gutierrez Romero',
        'role': 'Tècnic en Sistemes & Desenvolupador',
        'contact': [
            'Email: ciruelomayka@gmail.com',
            'Telèfon: +34 635 074 516',
            'Ubicació: Caldes de Montbui, Barcelona, Catalunya',
            'GitHub: github.com/veki123-boop'
        ],
        'summary_title': 'Resum',
        'summary': 'Tinc 17 anys i estic molt motivat per aprendre i créixer en el camp de la tecnologia. M\'interessen especialment àrees com la programació, la intel·ligència artificial i els sistemes informàtics. M\'apasiona comprendre com funciona la tecnologia. Tot el que tingui a veure amb aprendre coses de tecnologia em sembla interessant.',
        'experience_title': 'Experiència Laboral',
        'experience': [
            {
                'title': 'Ajudant d\'Informàtica',
                'company': 'APP Caldes',
                'date': 'Febrer 2025 - Juny 2025',
                'description': [
                    'Configuració de Sistemes Operatius (instal·lació de Windows, drivers, actualitzacions)',
                    'Manteniment d\'Equips Informàtics',
                    'Formatejament i instal·lació d\'ordinadors',
                    'Instal·lació i configuració de programes bàsics (Office, navegadors, antivirus, etc.)',
                    'Muntatge i substitució de components de maquinari'
                ]
            }
        ],
        'education_title': 'Educació',
        'education': [
            {
                'title': 'Tècnic en Sistemes Microinformàtics i Xarxes (SMX)',
                'school': 'La Ferreria',
                'date': 'Setembre 2025 - Actualment',
                'description': 'Grau Mitjà en Sistemes Microinformàtics i Xarxes - En curs'
            },
            {
                'title': 'Ajudant de Manteniment d\'Equips Informàtics',
                'school': 'La Ferreria',
                'date': 'Setembre 2024 - Juny 2025',
                'description': 'Programa de Formació Inicial (PFI) - Completat'
            }
        ],
        'skills_title': 'Habilitats',
        'technical_skills': 'HTML, CSS, C++, Linux, VMware, VirtualBox, SFTP, SSH, Minecraft, Xarxes, Maquinari',
        'personal_skills': 'Bona Comunicació, Bona Adaptabilitat, Aprenentatge Ràpid, Molta Constància',
        'languages_title': 'Idiomes',
        'languages': [
            'Català - Natiu',
            'Espanyol - Natiu',
            'Anglès - Molt bo',
            'Portuguès - Bàsic'
        ],
        'hobbies_title': 'Aficions',
        'hobbies': 'En els meus temps lliures dedico part del meu temps a continuar aprenent i millorant els meus coneixements en l\'àmbit de la tecnologia. Actualment estic aprenent programació en C++, practicant amb petits projectes i exercicis. A més, també m\'interessa la configuració i programació de servidors de Minecraft, treballant amb eines com SFTP per gestionar i configurar remotament.'
    }
}

def generate_cv_pdf(language='es'):
    """Genera un CV en PDF para el idioma especificado"""
    
    content = CONTENT[language]
    filename = f'CV_Ivan_Gutierrez_{language.upper()}.pdf'
    
    # Crear documento
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        rightMargin=0.5*inch,
        leftMargin=0.5*inch,
        topMargin=0.5*inch,
        bottomMargin=0.5*inch
    )
    
    # Contenedor de elementos
    elements = []
    
    # Encabezado con nombre y rol
    title = Paragraph(content['title'], title_style)
    role = Paragraph(content['role'], subtitle_style)
    elements.append(title)
    elements.append(role)
    elements.append(Spacer(1, 0.1*inch))
    
    # Información de contacto
    contact_text = ' | '.join(content['contact'])
    contact = Paragraph(contact_text, ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontSize=9,
        textColor=COLOR_GRAY,
        alignment=TA_CENTER
    ))
    elements.append(contact)
    elements.append(Spacer(1, 0.2*inch))
    
    # Línea separadora
    elements.append(Paragraph('<hr/>', styles['Normal']))
    elements.append(Spacer(1, 0.1*inch))
    
    # Resumen
    elements.append(Paragraph(content['summary_title'], section_style))
    summary = Paragraph(content['summary'], ParagraphStyle(
        'Summary',
        parent=styles['Normal'],
        fontSize=10,
        alignment=TA_JUSTIFY,
        spaceAfter=12
    ))
    elements.append(summary)
    
    # Experiencia Laboral
    elements.append(Paragraph(content['experience_title'], section_style))
    for exp in content['experience']:
        elements.append(Paragraph(f"<b>{exp['title']}</b>", ParagraphStyle(
            'ExpTitle',
            parent=styles['Normal'],
            fontSize=11,
            textColor=COLOR_DARK,
            fontName='Helvetica-Bold'
        )))
        elements.append(Paragraph(f"<i>{exp['company']} | {exp['date']}</i>", ParagraphStyle(
            'ExpCompany',
            parent=styles['Normal'],
            fontSize=9,
            textColor=COLOR_GRAY,
            fontName='Helvetica-Oblique'
        )))
        for desc in exp['description']:
            elements.append(Paragraph(f"• {desc}", ParagraphStyle(
                'ExpDesc',
                parent=styles['Normal'],
                fontSize=9,
                leftIndent=0.2*inch,
                spaceAfter=4
            )))
        elements.append(Spacer(1, 0.1*inch))
    
    # Educación
    elements.append(Paragraph(content['education_title'], section_style))
    for edu in content['education']:
        elements.append(Paragraph(f"<b>{edu['title']}</b>", ParagraphStyle(
            'EduTitle',
            parent=styles['Normal'],
            fontSize=11,
            textColor=COLOR_DARK,
            fontName='Helvetica-Bold'
        )))
        elements.append(Paragraph(f"<i>{edu['school']} | {edu['date']}</i>", ParagraphStyle(
            'EduSchool',
            parent=styles['Normal'],
            fontSize=9,
            textColor=COLOR_GRAY,
            fontName='Helvetica-Oblique'
        )))
        elements.append(Paragraph(edu['description'], ParagraphStyle(
            'EduDesc',
            parent=styles['Normal'],
            fontSize=9,
            spaceAfter=8
        )))
    
    # Habilidades
    elements.append(Paragraph(content['skills_title'], section_style))
    elements.append(Paragraph(f"<b>Técnicas:</b> {content['technical_skills']}", ParagraphStyle(
        'Skills',
        parent=styles['Normal'],
        fontSize=9,
        spaceAfter=6
    )))
    elements.append(Paragraph(f"<b>Personales:</b> {content['personal_skills']}", ParagraphStyle(
        'Skills',
        parent=styles['Normal'],
        fontSize=9,
        spaceAfter=12
    )))
    
    # Idiomas
    elements.append(Paragraph(content['languages_title'], section_style))
    for lang in content['languages']:
        elements.append(Paragraph(f"• {lang}", ParagraphStyle(
            'Language',
            parent=styles['Normal'],
            fontSize=9,
            leftIndent=0.2*inch,
            spaceAfter=4
        )))
    elements.append(Spacer(1, 0.1*inch))
    
    # Aficiones
    elements.append(Paragraph(content['hobbies_title'], section_style))
    hobbies = Paragraph(content['hobbies'], ParagraphStyle(
        'Hobbies',
        parent=styles['Normal'],
        fontSize=9,
        alignment=TA_JUSTIFY,
        spaceAfter=12
    ))
    elements.append(hobbies)
    
    # Pie de página
    elements.append(Spacer(1, 0.2*inch))
    footer = Paragraph(
        f"<i>Generado el {datetime.now().strftime('%d/%m/%Y')}</i>",
        ParagraphStyle(
            'Footer',
            parent=styles['Normal'],
            fontSize=8,
            textColor=COLOR_GRAY,
            alignment=TA_CENTER
        )
    )
    elements.append(footer)
    
    # Construir PDF
    doc.build(elements)
    print(f"✅ CV generado: {filename}")
    return filename

# Generar CVs en los 3 idiomas
if __name__ == '__main__':
    print("🚀 Generando CVs en 3 idiomas...")
    for lang in ['es', 'en', 'ca']:
        generate_cv_pdf(lang)
    print("✅ ¡Todos los CVs han sido generados!")
