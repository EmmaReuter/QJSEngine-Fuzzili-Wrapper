/****************************************************************************
** Meta object code from reading C++ file 'segfault.h'
**
** Created by: The Qt Meta Object Compiler version 68 (Qt 6.2.4)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include <memory>
#include "segfault.h"
#include <QtGui/qtextcursor.h>
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'segfault.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 68
#error "This file was generated using the moc from 6.2.4. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_SegFault_t {
    const uint offsetsAndSize[10];
    char stringdata0[26];
};
#define QT_MOC_LITERAL(ofs, len) \
    uint(offsetof(qt_meta_stringdata_SegFault_t, stringdata0) + ofs), len 
static const qt_meta_stringdata_SegFault_t qt_meta_stringdata_SegFault = {
    {
QT_MOC_LITERAL(0, 8), // "SegFault"
QT_MOC_LITERAL(9, 5), // "fault"
QT_MOC_LITERAL(15, 0), // ""
QT_MOC_LITERAL(16, 5), // "print"
QT_MOC_LITERAL(22, 3) // "msg"

    },
    "SegFault\0fault\0\0print\0msg"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_SegFault[] = {

 // content:
      10,       // revision
       0,       // classname
       0,    0, // classinfo
       2,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       1,   31, // constructors
       0,       // flags
       0,       // signalCount

 // methods: name, argc, parameters, tag, flags, initial metatype offsets
       1,    0,   26,    2, 0x02,    1 /* Public */,
       3,    1,   27,    2, 0x02,    2 /* Public */,

 // methods: parameters
    QMetaType::Void,
    QMetaType::Void, QMetaType::QString,    4,

 // constructors: parameters
    0x80000000 | 2,

 // constructors: name, argc, parameters, tag, flags, initial metatype offsets
       0,    0,   30,    2, 0x0e,    4 /* Public */,

       0        // eod
};

void SegFault::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::CreateInstance) {
        switch (_id) {
        case 0: { SegFault *_r = new SegFault();
            if (_a[0]) *reinterpret_cast<QObject**>(_a[0]) = _r; } break;
        default: break;
        }
    } else if (_c == QMetaObject::InvokeMetaMethod) {
        auto *_t = static_cast<SegFault *>(_o);
        (void)_t;
        switch (_id) {
        case 0: _t->fault(); break;
        case 1: _t->print((*reinterpret_cast< std::add_pointer_t<QString>>(_a[1]))); break;
        default: ;
        }
    }
}

const QMetaObject SegFault::staticMetaObject = { {
    QMetaObject::SuperData::link<QObject::staticMetaObject>(),
    qt_meta_stringdata_SegFault.offsetsAndSize,
    qt_meta_data_SegFault,
    qt_static_metacall,
    nullptr,
qt_incomplete_metaTypeArray<qt_meta_stringdata_SegFault_t
, QtPrivate::TypeAndForceComplete<SegFault, std::true_type>

, QtPrivate::TypeAndForceComplete<void, std::false_type>, QtPrivate::TypeAndForceComplete<void, std::false_type>, QtPrivate::TypeAndForceComplete<QString, std::false_type>

>,
    nullptr
} };


const QMetaObject *SegFault::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *SegFault::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_SegFault.stringdata0))
        return static_cast<void*>(this);
    return QObject::qt_metacast(_clname);
}

int SegFault::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QObject::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 2)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 2;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 2)
            *reinterpret_cast<QMetaType *>(_a[0]) = QMetaType();
        _id -= 2;
    }
    return _id;
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
